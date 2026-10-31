import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7y14sqcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7y14sqcr"/>`,
		"fallback": "coolicons:cloud-sun-round",
	});
}

export default Component;
