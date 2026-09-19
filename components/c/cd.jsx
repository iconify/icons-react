import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs8xkbbwh.css';
import '../../css/b/b5eoc9f6b.css';
import '../../css/f/fh0rozb0g.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bs8xkbbwh"/><path class="b5eoc9f6b"/><path class="fh0rozb0g"/></g>`,
		"fallback": "cif:cd",
	});
}

export default Component;
