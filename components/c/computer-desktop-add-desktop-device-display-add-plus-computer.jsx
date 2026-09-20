import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c35mn0b7c.css';
import '../../css/y/y78o-yb3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="c35mn0b7c"/><path class="y78o-yb3a"/></g>`,
		"fallback": "streamline:computer-desktop-add-desktop-device-display-add-plus-computer",
	});
}

export default Component;
