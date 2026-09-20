import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pm4xnuq0j.css';
import '../../css/s/sv6c4jbpw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pm4xnuq0j"/><path class="sv6c4jbpw"/></g>`,
		"fallback": "streamline:give-gift",
	});
}

export default Component;
