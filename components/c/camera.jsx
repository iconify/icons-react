import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvw1sgbmg.css';
import '../../css/d/dadjyuuuw.css';
import '../../css/i/iub83gpix.css';
import '../../css/c/c8fa596cz.css';
import '../../css/s/skzekmb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cvw1sgbmg wm-shadow"/><path class="dadjyuuuw"/><path class="iub83gpix"/><path class="c8fa596cz"/><path class="skzekmb9r"/></g>`,
		"fallback": "withicons-retro:camera",
	});
}

export default Component;
