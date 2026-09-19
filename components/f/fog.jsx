import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8zko0f9l.css';
import '../../css/m/mw9akibpt.css';
import '../../css/h/hhblzq4_i.css';
import '../../css/r/r0cayg01m.css';
import '../../css/w/w-ulw3ceb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8zko0f9l"/><path class="mw9akibpt"/><path class="hhblzq4_i"/><path class="r0cayg01m"/><path class="w-ulw3ceb"/></g>`,
		"fallback": "fluent-emoji-flat:fog",
	});
}

export default Component;
