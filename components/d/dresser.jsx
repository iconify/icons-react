import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/b/bgbwyzp1w.css';
import '../../css/i/iw4y6d63i.css';
import '../../css/m/m8hniybto.css';
import '../../css/i/iotup4u4d.css';
import '../../css/d/d78p0i7nc.css';
import '../../css/m/me2zm1bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lk2gmgbqk"/><path class="bgbwyzp1w"/><path class="iw4y6d63i"/><path class="m8hniybto"/><path class="iotup4u4d"/><path class="d78p0i7nc"/><path class="me2zm1bui"/></g>`,
		"fallback": "iconaut:dresser",
	});
}

export default Component;
