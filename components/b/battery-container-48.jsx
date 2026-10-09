import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl2z74b1y.css';
import '../../css/l/lv3t6tmyd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl2z74b1y"/><path class="lv3t6tmyd"/>`,
		"fallback": "energy-icons:battery-container-48",
	});
}

export default Component;
