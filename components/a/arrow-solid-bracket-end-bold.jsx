import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrwywm8dv.css';
import '../../css/u/ucjoi-m7d.css';
import '../../css/g/gv8vpi07i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrwywm8dv"/><path clip-rule="evenodd" class="ucjoi-m7d"/><path class="gv8vpi07i"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-end-bold",
	});
}

export default Component;
