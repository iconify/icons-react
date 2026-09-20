import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fwalk9d_s.css';
import '../../css/u/ub34zfbzb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fwalk9d_s"/><circle class="ub34zfbzb"/></g>`,
		"fallback": "streamline:entertainment-party-popper-hobby-entertainment-party-popper-confetti-event",
	});
}

export default Component;
