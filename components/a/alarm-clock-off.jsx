import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zol5qs1pg.css';
import '../../css/b/b3w9-obrf.css';
import '../../css/p/plp-s2ydl.css';
import '../../css/w/w40h1pb5g.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k zol5qs1pg"/><path class="b3w9-obrf wm-a"/><path class="plp-s2ydl"/><path class="w40h1pb5g"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:alarm-clock-off",
	});
}

export default Component;
