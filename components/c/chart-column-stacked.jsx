import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f5ezvhpol.css';
import '../../css/q/qij50sb9d.css';
import '../../css/s/sbc5a8b2s.css';
import '../../css/j/j5erqwb9a.css';
import '../../css/x/xla8u0ljy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f5ezvhpol wm-shadow"/><path class="qij50sb9d"/><path class="sbc5a8b2s"/><path class="j5erqwb9a"/><path class="xla8u0ljy"/></g>`,
		"fallback": "withicons-retro:chart-column-stacked",
	});
}

export default Component;
