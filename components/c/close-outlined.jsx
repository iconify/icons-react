import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz96fzzhj.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG0kegTdID" class="yz96fzzhj"/></defs><use href="#SVG0kegTdID" transform="translate(4 4)" class="d2kvgvbvc"/>`,
		"fallback": "weui:close-outlined",
	});
}

export default Component;
