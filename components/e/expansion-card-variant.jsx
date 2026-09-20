import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4up2objj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4up2objj"/>`,
		"fallback": "mdi:expansion-card-variant",
	});
}

export default Component;
