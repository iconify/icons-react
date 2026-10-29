import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zui445chq.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/h-u5cozqr.css';
import '../../css/f/f_fn14w_a.css';
import '../../css/f/fxix_iiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zui445chq"/><path class="sdaucgb_l wm-deco"/><path class="h-u5cozqr wm-k"/><path class="f_fn14w_a wm-a"/><path class="fxix_iiqi wm-k"/></g>`,
		"fallback": "withicons:file-x-blueprint",
	});
}

export default Component;
