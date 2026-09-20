import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acn3b8b5o.css';
import '../../css/f/f0zgc9bgp.css';
import '../../css/d/dwuza0bqk.css';
import '../../css/m/mrsdqccxe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="acn3b8b5o"/><path clip-rule="evenodd" class="f0zgc9bgp"/><path class="dwuza0bqk"/><path clip-rule="evenodd" class="mrsdqccxe"/></g>`,
		"fallback": "streamline-flex-color:building-1-flat",
	});
}

export default Component;
