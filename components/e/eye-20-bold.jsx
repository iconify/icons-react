import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoe3avbru.css';
import '../../css/o/okm62lwzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoe3avbru"/><path class="okm62lwzp"/>`,
		"fallback": "energy-icons:eye-20-bold",
	});
}

export default Component;
