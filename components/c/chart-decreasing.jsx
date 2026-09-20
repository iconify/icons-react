import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi9mmib_a.css';
import '../../css/i/i9m88b1-u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/krluo5bfx.css';
import '../../css/i/i4ohfdc0n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi9mmib_a"/><path class="i9m88b1-u"/><g class="ij2x_72vy"><path class="krluo5bfx"/><path class="i4ohfdc0n"/></g>`,
		"fallback": "openmoji:chart-decreasing",
	});
}

export default Component;
