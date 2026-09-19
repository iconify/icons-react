import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spla26bhi.css';
import '../../css/t/tn9pr_yae.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spla26bhi"/><path class="tn9pr_yae"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-fingers-splayed-light",
	});
}

export default Component;
