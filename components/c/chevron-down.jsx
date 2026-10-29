import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vguqmy3wv.css';
import '../../css/u/uopk9yb-w.css';
import '../../css/h/h-8800bhh.css';
import '../../css/w/wrdh-bbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vguqmy3wv wm-k"/><path class="uopk9yb-w wm-k"/><path class="h-8800bhh wm-k"/><path class="wm-shine wrdh-bbxu"/></g>`,
		"fallback": "withicons-anime:chevron-down",
	});
}

export default Component;
