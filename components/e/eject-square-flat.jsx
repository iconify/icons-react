import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptterccrf.css';
import '../../css/k/kz4kht1tv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptterccrf"/><path clip-rule="evenodd" class="kz4kht1tv"/></g>`,
		"fallback": "streamline-flex-color:eject-square-flat",
	});
}

export default Component;
