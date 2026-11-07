import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x35xwlb8d.css';
import '../../css/q/qe32f93df.css';
import '../../css/m/m3vancc3p.css';
import '../../css/j/jgax7j6rw.css';
import '../../css/r/rvwmhnb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x35xwlb8d"/><g clip-rule="evenodd" class="qe32f93df"><path class="m3vancc3p"/><path class="jgax7j6rw"/><path class="rvwmhnb9r"/></g>`,
		"fallback": "solar:headphones-round-sound-bold-duotone",
	});
}

export default Component;
