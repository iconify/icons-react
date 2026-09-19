import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngr40ja1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngr40ja1v"/>`,
		"fallback": "boxicons:a-arrow-down-filled",
	});
}

export default Component;
