import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y49u1nbmf.css';
import '../../css/m/m8-2r70ks.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mwr3xccrq.css';
import '../../css/i/ie-7kriki.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y49u1nbmf"/><path class="m8-2r70ks"/><g class="ij2x_72vy"><path class="mwr3xccrq"/><path class="ie-7kriki"/></g>`,
		"fallback": "openmoji:honey-pot",
	});
}

export default Component;
