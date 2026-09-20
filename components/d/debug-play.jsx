import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g65pj_bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g65pj_bpm"/>`,
		"fallback": "pixelarticons:debug-play",
	});
}

export default Component;
