import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkw6s9bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkw6s9bkt"/>`,
		"fallback": "mdi:arrow-top-right-bold-box-outline",
	});
}

export default Component;
