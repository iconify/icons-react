import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l20v2fbus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l20v2fbus"/>`,
		"fallback": "energy-icons:coal-20",
	});
}

export default Component;
