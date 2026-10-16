import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfwz4o2w.css';
import '../../css/q/q2k_kgbqh.css';
import '../../css/v/voscasbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezfwz4o2w"/><path class="q2k_kgbqh"/><path class="voscasbpt"/>`,
		"fallback": "energy-icons:earth-layers-48-bold",
	});
}

export default Component;
