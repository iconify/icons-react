import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkfnpiber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkfnpiber"/>`,
		"fallback": "withicons:folder-lock-solid",
	});
}

export default Component;
