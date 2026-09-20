import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugnaghb7j.css';
import '../../css/q/q60axzbtf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugnaghb7j"/><path class="q60axzbtf"/></g>`,
		"fallback": "streamline-color:erlenmeyer-flask",
	});
}

export default Component;
