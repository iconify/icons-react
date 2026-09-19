import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpta62pcs.css';
import '../../css/c/c6-vmvbdd.css';
import '../../css/f/fh57rqojb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fpta62pcs"/><path class="c6-vmvbdd"/><path class="fh57rqojb"/></g>`,
		"fallback": "glyphs:door-open-duo",
	});
}

export default Component;
