import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qslbzsqwh.css';
import '../../css/t/tg_1r3b9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qslbzsqwh"/><path class="tg_1r3b9p"/>`,
		"fallback": "energy-icons:battery-bolt-20-bold",
	});
}

export default Component;
