import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk9tnbfio.css';
import '../../css/x/xphc7fb2u.css';
import '../../css/r/rod3izbjm.css';
import '../../css/h/hjg2nm81k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qk9tnbfio"/><path clip-rule="evenodd" class="xphc7fb2u"/><path clip-rule="evenodd" class="rod3izbjm"/><path class="hjg2nm81k"/></g>`,
		"fallback": "glyphs-poly:bell-ring",
	});
}

export default Component;
