import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuuoc0zvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuuoc0zvl"/>`,
		"fallback": "mdi:api",
	});
}

export default Component;
