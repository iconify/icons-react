import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg96irb-q.css';
import '../../css/b/bm3ps4bdp.css';
import '../../css/a/a2kumftht.css';
import '../../css/o/owgj5rxcv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg96irb-q"/><path clip-rule="evenodd" class="bm3ps4bdp"/><path class="a2kumftht"/><path clip-rule="evenodd" class="owgj5rxcv"/></g>`,
		"fallback": "glyphs:battery-50-outline",
	});
}

export default Component;
