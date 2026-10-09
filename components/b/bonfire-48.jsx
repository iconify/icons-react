import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm29_vbfv.css';
import '../../css/q/q534ik57i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm29_vbfv"/><path class="q534ik57i"/>`,
		"fallback": "energy-icons:bonfire-48",
	});
}

export default Component;
