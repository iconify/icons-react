import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da03qrx5m.css';
import '../../css/s/sl6l9fbvz.css';
import '../../css/k/ke_s10ced.css';
import '../../css/m/mo_cvbbwz.css';
import '../../css/u/us-2fvbrj.css';
import '../../css/f/fszwpox_e.css';
import '../../css/y/yv1eh_box.css';
import '../../css/j/jiu1b_bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da03qrx5m wm-shadow"/><path class="sl6l9fbvz wm-k"/><path class="ke_s10ced wm-k"/><path class="mo_cvbbwz wm-k"/><path class="us-2fvbrj wm-k"/><path class="fszwpox_e wm-shine"/><path class="wm-a yv1eh_box"/><path class="jiu1b_bqi wm-a"/>`,
		"fallback": "withicons-plush:brain",
	});
}

export default Component;
