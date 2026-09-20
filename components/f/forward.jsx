import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ilr6hpbnj.css';
import '../../css/p/pcurjzbpf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="ilr6hpbnj"/><path class="pcurjzbpf"/></g>`,
		"fallback": "openmoji:forward",
	});
}

export default Component;
