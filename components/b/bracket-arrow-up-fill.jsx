import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zojmpb3mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zojmpb3mi"/>`,
		"fallback": "keyline-icons:bracket-arrow-up-fill",
	});
}

export default Component;
