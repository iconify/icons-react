import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8-k17wvu.css';
import '../../css/k/k10tp0b2x.css';
import '../../css/w/w7zkmmbma.css';
import '../../css/j/jaaglv9hr.css';
import '../../css/m/mukrhdc3s.css';
import '../../css/g/g6ao6ibwg.css';
import '../../css/h/hxnllrbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8-k17wvu wm-k"/><path class="k10tp0b2x wm-k"/><path class="w7zkmmbma wm-k"/><path class="jaaglv9hr wm-a"/><path class="mukrhdc3s wm-a"/><path class="g6ao6ibwg wm-a"/><path class="hxnllrbii wm-shine"/></g>`,
		"fallback": "withicons-anime:contrast",
	});
}

export default Component;
