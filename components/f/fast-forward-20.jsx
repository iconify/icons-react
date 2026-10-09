import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-7yzwbmb.css';
import '../../css/n/n0tshoxcj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-7yzwbmb"/><path class="n0tshoxcj"/>`,
		"fallback": "energy-icons:fast-forward-20",
	});
}

export default Component;
