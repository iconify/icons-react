import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-wp8ku1y.css';
import '../../css/k/k3ajm_boq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-wp8ku1y"/><path class="k3ajm_boq"/></g>`,
		"fallback": "fluent-emoji-flat:broccoli",
	});
}

export default Component;
