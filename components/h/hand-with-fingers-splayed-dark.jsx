import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo5espbeu.css';
import '../../css/t/tg19obcth.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo5espbeu"/><path class="tg19obcth"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-fingers-splayed-dark",
	});
}

export default Component;
