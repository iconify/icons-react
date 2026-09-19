import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m9569c2lu.css';
import '../../css/p/pfmce6b4y.css';
import '../../css/n/n40ywwckf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="m9569c2lu"/><rect class="pfmce6b4y"/><rect class="n40ywwckf"/></g>`,
		"fallback": "glyphs:box-layout-2-bold",
	});
}

export default Component;
