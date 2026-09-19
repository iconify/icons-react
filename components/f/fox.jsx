import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzmceyb3d.css';
import '../../css/h/h_t03-bjv.css';
import '../../css/w/wq8363ozr.css';
import '../../css/l/lt7dyxb6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzmceyb3d"/><path class="h_t03-bjv"/><path class="wq8363ozr"/><path class="lt7dyxb6b"/></g>`,
		"fallback": "fluent-emoji-flat:fox",
	});
}

export default Component;
