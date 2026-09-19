import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m9569c2lu.css';
import '../../css/n/noetay_uo.css';
import '../../css/v/vb0af0blw.css';
import '../../css/l/lbb4fzhgj.css';
import '../../css/m/m6cnbnbyl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><rect class="m9569c2lu"/><path class="noetay_uo"/><rect class="vb0af0blw"/><rect class="lbb4fzhgj"/><path class="m6cnbnbyl"/></g>`,
		"fallback": "glyphs:box-layout-bold",
	});
}

export default Component;
