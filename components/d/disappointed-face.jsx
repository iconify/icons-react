import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf3e5ykvo.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wplkh7x2z.css';
import '../../css/z/zsll00blu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf3e5ykvo"/><g class="brzn_0bpr"><circle class="wplkh7x2z"/><path class="zsll00blu"/></g>`,
		"fallback": "openmoji:disappointed-face",
	});
}

export default Component;
