import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy4k87b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy4k87b1d"/>`,
		"fallback": "mdi:image-filter-center-focus-weak",
	});
}

export default Component;
