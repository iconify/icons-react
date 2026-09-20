import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixqu6acfo.css';
import '../../css/t/ttp2qj2qw.css';
import '../../css/g/gsa6egb0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixqu6acfo"/><path class="ttp2qj2qw"/><path class="gsa6egb0x"/></g>`,
		"fallback": "streamline-color:fingerprint-1",
	});
}

export default Component;
