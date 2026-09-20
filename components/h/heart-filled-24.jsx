import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unrze375k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unrze375k"/>`,
		"fallback": "qlementine-icons:heart-filled-24",
	});
}

export default Component;
