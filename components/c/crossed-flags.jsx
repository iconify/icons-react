import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znrpuji4k.css';
import '../../css/m/mwzyskgks.css';
import '../../css/f/fp2ytl5nf.css';
import '../../css/h/hv77mauqn.css';
import '../../css/u/udd3bbc2x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znrpuji4k"/><circle class="mwzyskgks"/><circle class="fp2ytl5nf"/><path class="hv77mauqn"/><g class="udd3bbc2x"><circle class="mwzyskgks"/><circle class="fp2ytl5nf"/></g>`,
		"fallback": "openmoji:crossed-flags",
	});
}

export default Component;
