import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2nt8ab-v.css';
import '../../css/q/qm9y-abir.css';
import '../../css/x/x-pqprbxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k2nt8ab-v"/><path class="qm9y-abir"/><path class="x-pqprbxw"/></g>`,
		"fallback": "fluent-emoji-flat:graduation-cap",
	});
}

export default Component;
