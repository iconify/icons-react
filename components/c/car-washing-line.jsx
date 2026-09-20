import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti7rj0bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti7rj0bex"/>`,
		"fallback": "ri:car-washing-line",
	});
}

export default Component;
