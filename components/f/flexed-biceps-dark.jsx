import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4u9uvl0h.css';
import '../../css/t/t-b9egzry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4u9uvl0h"/><path class="t-b9egzry"/></g>`,
		"fallback": "fluent-emoji-flat:flexed-biceps-dark",
	});
}

export default Component;
