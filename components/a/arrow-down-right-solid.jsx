import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7my3gbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7my3gbjh"/>`,
		"fallback": "withicons:arrow-down-right-solid",
	});
}

export default Component;
