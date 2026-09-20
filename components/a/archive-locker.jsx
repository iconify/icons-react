import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k1_zc7g_q.css';
import '../../css/d/do65pyj8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k1_zc7g_q"/><path class="do65pyj8p"/></g>`,
		"fallback": "streamline-ultimate:archive-locker",
	});
}

export default Component;
