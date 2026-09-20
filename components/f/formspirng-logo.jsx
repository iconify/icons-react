import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/smucccbcr.css';
import '../../css/h/hyy3alb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="smucccbcr"/><path class="hyy3alb2k"/></g>`,
		"fallback": "streamline-logos:formspirng-logo",
	});
}

export default Component;
