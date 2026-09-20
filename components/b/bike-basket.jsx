import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grw1hlb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grw1hlb_v"/>`,
		"fallback": "mdi:bike-basket",
	});
}

export default Component;
