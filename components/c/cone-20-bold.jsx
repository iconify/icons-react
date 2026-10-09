import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6azyy2ro.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6azyy2ro"/>`,
		"fallback": "energy-icons:cone-20-bold",
	});
}

export default Component;
