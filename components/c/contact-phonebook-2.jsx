import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_ui9cbsq.css';
import '../../css/f/fl1fl1mkz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b_ui9cbsq"/><path class="fl1fl1mkz"/></g>`,
		"fallback": "streamline:contact-phonebook-2",
	});
}

export default Component;
