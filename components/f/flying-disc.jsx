import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmrtfwbyk.css';
import '../../css/o/omua7k0ch.css';
import '../../css/f/fgxrb3bou.css';
import '../../css/h/hw1lekbqa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmrtfwbyk"/><path class="omua7k0ch"/><path class="fgxrb3bou"/><path class="hw1lekbqa"/></g>`,
		"fallback": "fluent-emoji-flat:flying-disc",
	});
}

export default Component;
