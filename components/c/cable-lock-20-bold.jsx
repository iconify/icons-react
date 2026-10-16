import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0y1hb7o.css';
import '../../css/d/dscdkvbmq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql0y1hb7o"/><path class="dscdkvbmq"/>`,
		"fallback": "energy-icons:cable-lock-20-bold",
	});
}

export default Component;
