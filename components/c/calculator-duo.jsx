import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wzr_6bn_j.css';
import '../../css/n/nj6yhupln.css';
import '../../css/l/l7umh3bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wzr_6bn_j"/><path class="nj6yhupln wm-a"/><path class="l7umh3bwe"/></g>`,
		"fallback": "withicons:calculator-duo",
	});
}

export default Component;
