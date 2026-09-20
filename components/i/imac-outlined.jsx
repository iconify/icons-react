import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhz01_o5b.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG8KAPOcZt" class="nhz01_o5b"/></defs><use href="#SVG8KAPOcZt" transform="translate(2 4)" class="d2kvgvbvc"/>`,
		"fallback": "weui:imac-outlined",
	});
}

export default Component;
