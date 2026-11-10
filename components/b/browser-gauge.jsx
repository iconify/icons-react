import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/madnxdgbd.css';
import '../../css/g/gwacaic4r.css';
import '../../css/r/r0shambwg.css';
import '../../css/x/xh2jw2brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="madnxdgbd"/><path class="gwacaic4r"/><path class="r0shambwg"/><path class="xh2jw2brd"/></g>`,
		"fallback": "andrsrxn:browser-gauge",
	});
}

export default Component;
