import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq4guz5es.css';
import '../../css/q/qyahs8kgl.css';
import '../../css/q/qpl33vbpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq4guz5es"/><path class="qyahs8kgl"/><path class="qpl33vbpy"/>`,
		"fallback": "energy-icons:belt-drive-20-bold",
	});
}

export default Component;
