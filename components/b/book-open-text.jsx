import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9z_vjbpx.css';
import '../../css/l/lzogmbc1j.css';
import '../../css/q/qzsrz6p3t.css';
import '../../css/r/rxtv58b2d.css';
import '../../css/l/lo297249j.css';
import '../../css/p/pzdvvgbeh.css';
import '../../css/p/pslrejgia.css';
import '../../css/e/ex0140acb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9z_vjbpx wm-shadow"/><path class="lzogmbc1j wm-k"/><path class="qzsrz6p3t wm-k"/><path class="rxtv58b2d wm-k"/><path class="lo297249j wm-k"/><path class="pzdvvgbeh wm-shine"/><path class="pslrejgia wm-k"/><path class="ex0140acb wm-a"/>`,
		"fallback": "withicons-plush:book-open-text",
	});
}

export default Component;
