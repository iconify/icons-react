import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfgcicctr.css';
import '../../css/d/dwmd5bb5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfgcicctr"/><path class="dwmd5bb5o"/>`,
		"fallback": "energy-icons:dice-4-20-bold",
	});
}

export default Component;
