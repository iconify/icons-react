import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lyxil9baw.css';
import '../../css/t/tylp8-t1y.css';
import '../../css/y/y_ry23blx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lyxil9baw"/><path class="tylp8-t1y"/><path class="y_ry23blx"/></g>`,
		"fallback": "glyphs:dollar-bill-wave-duo",
	});
}

export default Component;
