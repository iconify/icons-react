import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htelenzop.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":12,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG1pzpbdYY" class="htelenzop"/></defs><use href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)" class="d2kvgvbvc"/>`,
		"fallback": "weui:arrow-outlined",
	});
}

export default Component;
