import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/umjt8mb0r.css';
import '../../css/b/bonnpubkr.css';
import '../../css/d/d8d5-xbyq.css';
import '../../css/y/yt5ophbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="umjt8mb0r wm-shadow"/><path class="bonnpubkr"/><path class="d8d5-xbyq"/><path class="yt5ophbhq"/></g>`,
		"fallback": "withicons-retro:christmas-tree",
	});
}

export default Component;
