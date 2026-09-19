import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9j6mi2w.css';
import '../../css/y/y51fahmwi.css';
import '../../css/y/yz98lyb1r.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh9j6mi2w"/><path class="y51fahmwi"/><path class="yz98lyb1r"/></g>`,
		"fallback": "cif:de",
	});
}

export default Component;
