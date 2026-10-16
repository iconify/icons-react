import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_38zbbbr.css';
import '../../css/q/qpiu3eb1z.css';
import '../../css/v/vxcokgmud.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_38zbbbr"/><path class="qpiu3eb1z"/><path class="vxcokgmud"/>`,
		"fallback": "energy-icons:futures-20",
	});
}

export default Component;
