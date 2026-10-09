import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa-dagiaz.css';
import '../../css/k/kialax5-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa-dagiaz"/><path class="kialax5-u"/>`,
		"fallback": "energy-icons:heat-network-48",
	});
}

export default Component;
