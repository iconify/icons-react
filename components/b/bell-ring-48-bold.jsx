import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxk_vcban.css';
import '../../css/f/fy_4q-bzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxk_vcban"/><path class="fy_4q-bzq"/>`,
		"fallback": "energy-icons:bell-ring-48-bold",
	});
}

export default Component;
