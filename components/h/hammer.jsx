import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4bvf14zw.css';
import '../../css/y/y2hjzlb3l.css';
import '../../css/h/h7ej-dbml.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4bvf14zw"/><path class="y2hjzlb3l"/><path class="h7ej-dbml"/></g>`,
		"fallback": "fluent-emoji-flat:hammer",
	});
}

export default Component;
