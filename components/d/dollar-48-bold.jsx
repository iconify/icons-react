import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgom5jd5t.css';
import '../../css/x/xpq7xwfiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgom5jd5t"/><path class="xpq7xwfiv"/>`,
		"fallback": "energy-icons:dollar-48-bold",
	});
}

export default Component;
