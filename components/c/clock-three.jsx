import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr-m-zbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr-m-zbas"/>`,
		"fallback": "uis:clock-three",
	});
}

export default Component;
