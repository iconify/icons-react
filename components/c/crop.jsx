import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/wgg_49bkt.css';
import '../../css/d/d4-4yzbjm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="wgg_49bkt"/><path class="d4-4yzbjm"/></g>`,
		"fallback": "system-uicons:crop",
	});
}

export default Component;
