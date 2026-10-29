import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yofw3vbgf.css';
import '../../css/w/wczpxsbww.css';
import '../../css/z/zurq0abtp.css';
import '../../css/c/c2e_ol-8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k yofw3vbgf"/><path class="wczpxsbww wm-a"/><path class="zurq0abtp"/><path class="c2e_ol-8u"/></g>`,
		"fallback": "withicons-bauhaus:holly",
	});
}

export default Component;
