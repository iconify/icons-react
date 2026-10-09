import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-kp5908v.css';
import '../../css/x/xhbmkr9uj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-kp5908v"/><path class="xhbmkr9uj"/>`,
		"fallback": "energy-icons:battery-pack-48",
	});
}

export default Component;
