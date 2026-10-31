import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwtte82_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwtte82_t"/>`,
		"fallback": "coolicons:briefcase-round",
	});
}

export default Component;
