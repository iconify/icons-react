import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ca-1d_bkz.css';
import '../../css/y/yr1wpj77v.css';
import '../../css/p/p_kl59b1m.css';
import '../../css/j/j90xqmbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ca-1d_bkz"/><path class="wm-shadow yr1wpj77v"/><path class="p_kl59b1m"/><path class="j90xqmbyp"/></g>`,
		"fallback": "withicons:hourglass-engrave",
	});
}

export default Component;
