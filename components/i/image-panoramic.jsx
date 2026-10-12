import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xe7s5t0-f.css';
import '../../css/l/l3d6xihwu.css';
import '../../css/x/xtosehpxk.css';
import '../../css/y/y5_xywj9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xe7s5t0-f"/><path class="l3d6xihwu"/><path class="xtosehpxk"/><path class="y5_xywj9v"/></g>`,
		"fallback": "andrsrxn:image-panoramic",
	});
}

export default Component;
