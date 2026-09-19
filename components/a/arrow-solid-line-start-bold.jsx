import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dce5w2b3k.css';
import '../../css/r/rj0_dwbpf.css';
import '../../css/f/f4dci94xs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dce5w2b3k"/><path class="rj0_dwbpf"/><path class="f4dci94xs"/></g>`,
		"fallback": "glyphs:arrow-solid-line-start-bold",
	});
}

export default Component;
