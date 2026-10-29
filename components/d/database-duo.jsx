import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wm7z0fbzo.css';
import '../../css/o/o53n0ib2h.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i-7a-zb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm7z0fbzo"/><path class="o53n0ib2h wm-a"/><path class="y95393_dl"/><path class="i-7a-zb9i"/></g>`,
		"fallback": "withicons:database-duo",
	});
}

export default Component;
