import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/k/kdt6r7boc.css';
import '../../css/w/wep00ffkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bg3dj-bbo"/><path class="d3y9mw6db"/><path class="kdt6r7boc wm-a"/><path class="wep00ffkx"/></g>`,
		"fallback": "withicons:avatar-man-bald",
	});
}

export default Component;
