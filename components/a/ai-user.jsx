import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qho-vbgvk.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/d/d7riv2b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qho-vbgvk"/><path class="dg7qrmb6g"/><path class="d7riv2b-f"/></g>`,
		"fallback": "hugeicons:ai-user",
	});
}

export default Component;
