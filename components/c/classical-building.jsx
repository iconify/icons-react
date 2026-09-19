import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rn9qglbrb.css';
import '../../css/l/l9zy78bvf.css';
import '../../css/r/r4a2qqbdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rn9qglbrb"/><path class="l9zy78bvf"/><path class="r4a2qqbdi"/></g>`,
		"fallback": "fluent-emoji-flat:classical-building",
	});
}

export default Component;
