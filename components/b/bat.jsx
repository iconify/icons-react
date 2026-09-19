import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdr5pxbwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdr5pxbwm"/>`,
		"fallback": "icon-park-outline:bat",
	});
}

export default Component;
