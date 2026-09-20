import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z145zhb_r.css';
import '../../css/h/h54yt-lzh.css';
import '../../css/h/hpt6_3jge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z145zhb_r"/><path class="h54yt-lzh"/><path clip-rule="evenodd" class="hpt6_3jge"/></g>`,
		"fallback": "streamline-plump-color:browser-website-1-flat",
	});
}

export default Component;
