import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkk8debim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkk8debim"/>`,
		"fallback": "boxicons:cup-tea-filled",
	});
}

export default Component;
