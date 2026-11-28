import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbzx7_b3u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h5-xafb4k.css';
import '../../css/i/icq-r7o2s.css';
import '../../css/q/qudhafvrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tbzx7_b3u"/><g class="dt0cm9dhy primary"><path class="h5-xafb4k"/><path class="icq-r7o2s"/><path class="qudhafvrj"/></g>`,
		"fallback": "iconaut:image-align-left-duo",
	});
}

export default Component;
