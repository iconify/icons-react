import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er8a602go.css';
import '../../css/w/w6rk5mb9y.css';
import '../../css/d/df5c527xr.css';
import '../../css/q/qt3qyac8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er8a602go"/><path class="w6rk5mb9y"/><path class="df5c527xr"/><path class="qt3qyac8c"/>`,
		"fallback": "energy-icons:cycle-lane-20",
	});
}

export default Component;
