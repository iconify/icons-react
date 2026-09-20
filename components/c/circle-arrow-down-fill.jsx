import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t16izkbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t16izkbsu"/>`,
		"fallback": "keyline-icons:circle-arrow-down-fill",
	});
}

export default Component;
