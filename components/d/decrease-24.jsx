import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4qmo_swz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4qmo_swz"/>`,
		"fallback": "qlementine-icons:decrease-24",
	});
}

export default Component;
