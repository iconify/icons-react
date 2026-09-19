import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyolqcc_l.css';
import '../../css/s/s28o31bys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyolqcc_l"/><path class="s28o31bys"/>`,
		"fallback": "carbon:document-unprotected",
	});
}

export default Component;
