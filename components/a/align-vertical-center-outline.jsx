import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfj16fbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jfj16fbzq"/>`,
		"fallback": "solar:align-vertical-center-outline",
	});
}

export default Component;
