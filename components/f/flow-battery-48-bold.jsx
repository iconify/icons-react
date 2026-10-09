import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9g9dcbtj.css';
import '../../css/l/l45xzzbew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9g9dcbtj"/><path class="l45xzzbew"/>`,
		"fallback": "energy-icons:flow-battery-48-bold",
	});
}

export default Component;
