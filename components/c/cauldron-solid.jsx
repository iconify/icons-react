import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v5dqb5lav.css';
import '../../css/e/e7o0z2bsq.css';
import '../../css/k/kzd_5m5vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v5dqb5lav"/><path class="e7o0z2bsq wm-a"/><path class="kzd_5m5vf wm-s"/></g>`,
		"fallback": "withicons:cauldron-solid",
	});
}

export default Component;
