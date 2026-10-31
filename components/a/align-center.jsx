import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p1-mhho-m.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p1-mhho-m"/><path class="mrkqmab9s wm-deco"/></g>`,
		"fallback": "withicons-kawaii:align-center",
	});
}

export default Component;
