import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8qtzdb_g.css';
import '../../css/r/rs2-o3b8y.css';
import '../../css/d/d48mzabin.css';
import '../../css/l/lqg73ql1z.css';
import '../../css/s/st5c8jstm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8qtzdb_g"/><path class="rs2-o3b8y"/><path class="d48mzabin"/><path class="lqg73ql1z"/><path class="st5c8jstm"/></g>`,
		"fallback": "fluent-emoji-flat:couch-and-lamp",
	});
}

export default Component;
