import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vy4d5bhgh.css';
import '../../css/l/lp2vq1b2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vy4d5bhgh"/><path class="lp2vq1b2x"/></g>`,
		"fallback": "si-glyph:briefcase-person",
	});
}

export default Component;
