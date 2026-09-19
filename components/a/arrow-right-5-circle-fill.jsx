import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bovqn3gyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bovqn3gyo"/>`,
		"fallback": "iconamoon:arrow-right-5-circle-fill",
	});
}

export default Component;
