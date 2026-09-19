import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw36prbuq.css';
import '../../css/g/g6t5hyj9f.css';
import '../../css/l/lo8z_s-pm.css';
import '../../css/h/hgn9uo92a.css';
import '../../css/u/ukkv-sj3o.css';
import '../../css/m/m04eombrt.css';
import '../../css/c/czn8o614p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aw36prbuq"/><path class="g6t5hyj9f"/><path class="lo8z_s-pm"/><path class="hgn9uo92a"/><path class="ukkv-sj3o"/><path class="m04eombrt"/><path clip-rule="evenodd" class="czn8o614p"/></g>`,
		"fallback": "glyphs-poly:building-2",
	});
}

export default Component;
