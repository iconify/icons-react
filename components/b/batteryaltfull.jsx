import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8l0bzpzn.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8l0bzpzn"/>`,
		"fallback": "whh:batteryaltfull",
	});
}

export default Component;
