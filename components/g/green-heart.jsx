import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3s-_cc2g.css';
import '../../css/m/m8bqvccua.css';
import '../../css/f/ffwvq5baq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3s-_cc2g"/><path class="m8bqvccua"/><ellipse transform="rotate(30 23.477 12.594)" class="ffwvq5baq"/></g>`,
		"fallback": "fluent-emoji-flat:green-heart",
	});
}

export default Component;
