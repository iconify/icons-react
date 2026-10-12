import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4cwmjbfo.css';
import '../../css/c/cbq6-0b6i.css';
import '../../css/v/v7sdo0bsx.css';
import '../../css/z/zseb28bor.css';
import '../../css/v/vsbd4wbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s4cwmjbfo"/><path class="cbq6-0b6i"/><path class="v7sdo0bsx"/><circle transform="rotate(90 12 12.91)" class="zseb28bor"/><path class="vsbd4wbjk"/></g>`,
		"fallback": "andrsrxn:camera-off",
	});
}

export default Component;
