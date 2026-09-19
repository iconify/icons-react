import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dq5t_-42k.css';
import '../../css/p/ppq-0kb9b.css';
import '../../css/d/dg7qrmb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dq5t_-42k"/><path class="ppq-0kb9b"/><path class="dg7qrmb6g"/></g>`,
		"fallback": "hugeicons:ai-video",
	});
}

export default Component;
