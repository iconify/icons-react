import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgxzg6bxq.css';
import '../../css/b/b5acqc5tr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgxzg6bxq"/><path class="b5acqc5tr"/></g>`,
		"fallback": "glyphs:exclamation-outline",
	});
}

export default Component;
