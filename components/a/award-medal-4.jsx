import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vsg6s8k0c.css';
import '../../css/s/szk1d5uij.css';
import '../../css/f/f3gmhjb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vsg6s8k0c"/><path class="szk1d5uij"/><path class="f3gmhjb0f"/></g>`,
		"fallback": "streamline-ultimate:award-medal-4",
	});
}

export default Component;
