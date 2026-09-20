import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri5exfbrq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri5exfbrq"/>`,
		"fallback": "memory:gamepad-center",
	});
}

export default Component;
