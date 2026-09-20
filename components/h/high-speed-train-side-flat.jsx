import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sldp7ibzz.css';
import '../../css/p/peinprb6j.css';
import '../../css/d/dacqocoug.css';
import '../../css/d/d0jaynbfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sldp7ibzz"/><path clip-rule="evenodd" class="peinprb6j"/><path class="dacqocoug"/><path clip-rule="evenodd" class="d0jaynbfk"/></g>`,
		"fallback": "streamline-plump-color:high-speed-train-side-flat",
	});
}

export default Component;
