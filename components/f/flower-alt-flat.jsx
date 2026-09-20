import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iorhqikzn.css';
import '../../css/w/waufwnbfm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iorhqikzn"/><path class="waufwnbfm"/></g>`,
		"fallback": "streamline-color:flower-alt-flat",
	});
}

export default Component;
