import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngq5gwbhz.css';
import '../../css/z/z7g55rbun.css';
import '../../css/n/nk4pzob8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngq5gwbhz"/><path class="z7g55rbun"/><path class="nk4pzob8v"/>`,
		"fallback": "energy-icons:futures-20-bold",
	});
}

export default Component;
