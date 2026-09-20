import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-7v8bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-7v8bbz"/>`,
		"fallback": "thesvg:eyeem",
	});
}

export default Component;
