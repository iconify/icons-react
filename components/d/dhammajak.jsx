import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zzp63eszt.css';
import '../../css/i/ipnzhkqrj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zzp63eszt"/><path class="ipnzhkqrj"/></g>`,
		"fallback": "streamline:dhammajak",
	});
}

export default Component;
