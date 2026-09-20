import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0ilznw3g.css';
import '../../css/k/kfklmfbwb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0ilznw3g"/><path class="kfklmfbwb"/></g>`,
		"fallback": "streamline-color:eject",
	});
}

export default Component;
