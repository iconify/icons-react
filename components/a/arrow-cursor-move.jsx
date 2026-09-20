import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4y5ujrxa.css';
import '../../css/k/kstf_2bzk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4y5ujrxa"/><path class="kstf_2bzk"/></g>`,
		"fallback": "streamline-flex-color:arrow-cursor-move",
	});
}

export default Component;
