import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sim-79wsr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sim-79wsr"/>`,
		"fallback": "ep:ice-drink",
	});
}

export default Component;
