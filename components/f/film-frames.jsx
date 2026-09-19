import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffc81hb5j.css';
import '../../css/c/cpx5i-b_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffc81hb5j"/><path class="cpx5i-b_g"/></g>`,
		"fallback": "fluent-emoji-flat:film-frames",
	});
}

export default Component;
