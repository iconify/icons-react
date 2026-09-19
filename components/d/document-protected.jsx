import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mogbiy72d.css';
import '../../css/y/yyolqcc_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mogbiy72d"/><path class="yyolqcc_l"/>`,
		"fallback": "carbon:document-protected",
	});
}

export default Component;
