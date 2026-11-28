import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy_jpibab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy_jpibab"/>`,
		"fallback": "noviair-light:box-open-x",
	});
}

export default Component;
