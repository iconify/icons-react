import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe8f_eb4j.css';
import '../../css/v/vjtl3vm_z.css';
import '../../css/k/krkzo_l8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe8f_eb4j"/><path class="vjtl3vm_z"/><path class="krkzo_l8s"/>`,
		"fallback": "energy-icons:current-source-48-bold",
	});
}

export default Component;
