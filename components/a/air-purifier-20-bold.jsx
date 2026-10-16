import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27au3gxx.css';
import '../../css/z/zt7ow5bcu.css';
import '../../css/y/yaf3voa5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27au3gxx"/><path class="zt7ow5bcu"/><path class="yaf3voa5l"/>`,
		"fallback": "energy-icons:air-purifier-20-bold",
	});
}

export default Component;
