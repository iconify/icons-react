import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w_kllgnne.css';
import '../../css/u/upeavtbgb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="w_kllgnne"/><path class="upeavtbgb"/></g>`,
		"fallback": "glyphs:box-layout-2",
	});
}

export default Component;
