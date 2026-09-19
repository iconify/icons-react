import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb0kjw99d.css';

const viewBox = {"width":440,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb0kjw99d"/>`,
		"fallback": "zmdi:alarm-off",
	});
}

export default Component;
