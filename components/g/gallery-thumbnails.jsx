import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrj87acev.css';
import '../../css/n/n8-7hlbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wrj87acev"/><path class="n8-7hlbiv"/></g>`,
		"fallback": "iconaut:gallery-thumbnails",
	});
}

export default Component;
