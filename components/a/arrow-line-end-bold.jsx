import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9gh2ac4j.css';
import '../../css/j/ju_626tpw.css';
import '../../css/q/q-vn-bcdj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9gh2ac4j"/><path class="ju_626tpw"/><path class="q-vn-bcdj"/></g>`,
		"fallback": "glyphs:arrow-line-end-bold",
	});
}

export default Component;
