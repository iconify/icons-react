import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzg9ekbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzg9ekbuc"/>`,
		"fallback": "boxicons:enter-filled",
	});
}

export default Component;
