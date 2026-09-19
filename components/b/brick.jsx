import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucij1x4yk.css';
import '../../css/c/cayv70bjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucij1x4yk"/><path class="cayv70bjt"/></g>`,
		"fallback": "fluent-emoji-flat:brick",
	});
}

export default Component;
