import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sd6v3_3ji.css';
import '../../css/w/w33zw0boi.css';
import '../../css/h/ht74vb5_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sd6v3_3ji"/><path class="w33zw0boi"/><path class="ht74vb5_x"/></g>`,
		"fallback": "fluent-emoji-flat:cancer",
	});
}

export default Component;
