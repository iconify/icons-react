import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyex3lbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyex3lbpt"/>`,
		"fallback": "noviair-light:cloud-x",
	});
}

export default Component;
