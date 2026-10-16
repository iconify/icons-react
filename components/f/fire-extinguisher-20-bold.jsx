import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr0xwjb7c.css';
import '../../css/p/pv2lfsb0a.css';
import '../../css/v/v09rlcbxy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr0xwjb7c"/><path class="pv2lfsb0a"/><path class="v09rlcbxy"/>`,
		"fallback": "energy-icons:fire-extinguisher-20-bold",
	});
}

export default Component;
