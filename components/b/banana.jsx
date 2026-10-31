import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p1d41nh3q.css';
import '../../css/m/m5svt1k4u.css';
import '../../css/l/l5qox53dc.css';
import '../../css/m/modyrobku.css';
import '../../css/j/jmg5kjbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p1d41nh3q wm-shadow"/><path class="m5svt1k4u"/><path class="l5qox53dc"/><path class="modyrobku"/><path class="jmg5kjbns"/></g>`,
		"fallback": "withicons-retro:banana",
	});
}

export default Component;
