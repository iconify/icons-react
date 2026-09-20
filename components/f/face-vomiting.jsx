import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/m/m0wodmeth.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b5h4wgblb.css';
import '../../css/y/yaxh6xbhq.css';
import '../../css/j/jfebrr_wi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="m0wodmeth"/><g class="ij2x_72vy"><path class="b5h4wgblb"/><path class="yaxh6xbhq"/><path class="jfebrr_wi"/></g>`,
		"fallback": "openmoji:face-vomiting",
	});
}

export default Component;
