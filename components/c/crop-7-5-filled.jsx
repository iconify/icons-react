import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edrlosohl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edrlosohl"/>`,
		"fallback": "tabler:crop-7-5-filled",
	});
}

export default Component;
