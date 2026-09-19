import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8x_tthfa.css';
import '../../css/t/tgotzmt5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8x_tthfa"/><path class="tgotzmt5m"/>`,
		"fallback": "icomoon-free:finder",
	});
}

export default Component;
