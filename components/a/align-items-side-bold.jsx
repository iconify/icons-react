import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8x4powpe.css';
import '../../css/z/zn9fk2bza.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8x4powpe"/><path class="zn9fk2bza"/></g>`,
		"fallback": "glyphs:align-items-side-bold",
	});
}

export default Component;
