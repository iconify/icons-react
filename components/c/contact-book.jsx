import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qu_g2rb4b.css';
import '../../css/l/lk9payb6a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qu_g2rb4b"/><path class="lk9payb6a"/></g>`,
		"fallback": "streamline-flex:contact-book",
	});
}

export default Component;
