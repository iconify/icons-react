import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qnu1b2b7u.css';
import '../../css/o/o7i4mccaf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qnu1b2b7u"/><path class="o7i4mccaf"/></g>`,
		"fallback": "streamline:fingerprint-1",
	});
}

export default Component;
