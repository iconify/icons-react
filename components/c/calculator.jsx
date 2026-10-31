import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/flpp0x1pp.css';
import '../../css/s/sbrhjh0fs.css';
import '../../css/q/qaqt0kbdl.css';
import '../../css/f/f06d4cboc.css';
import '../../css/k/kf49rtb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="flpp0x1pp wm-shadow"/><path class="sbrhjh0fs wm-shadow"/><path class="qaqt0kbdl"/><path class="f06d4cboc"/><path class="kf49rtb2j"/></g>`,
		"fallback": "withicons-brutal:calculator",
	});
}

export default Component;
