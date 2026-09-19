import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8g53tnjs.css';
import '../../css/u/u5zn6ccdc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8g53tnjs"/><path class="u5zn6ccdc"/></g>`,
		"fallback": "fluent-emoji-flat:comet",
	});
}

export default Component;
