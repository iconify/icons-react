import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a0f958b_d.css';
import '../../css/w/wswqc0biy.css';
import '../../css/z/zqhnrbn9t.css';
import '../../css/i/i9spirk0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a0f958b_d"/><path class="wm-a wswqc0biy"/><path class="wm-k zqhnrbn9t"/><path class="i9spirk0i wm-a"/></g>`,
		"fallback": "withicons:file-video-sketch",
	});
}

export default Component;
