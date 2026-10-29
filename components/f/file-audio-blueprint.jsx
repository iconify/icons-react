import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x8cw9cc6z.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/h-u5cozqr.css';
import '../../css/j/jogx_cc5x.css';
import '../../css/f/fxix_iiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x8cw9cc6z"/><path class="sdaucgb_l wm-deco"/><path class="h-u5cozqr wm-k"/><path class="jogx_cc5x wm-a"/><path class="fxix_iiqi wm-k"/></g>`,
		"fallback": "withicons:file-audio-blueprint",
	});
}

export default Component;
