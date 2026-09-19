import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyp1_ed3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyp1_ed3n"/>`,
		"fallback": "cryptocurrency:doge",
	});
}

export default Component;
