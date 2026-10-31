import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia8h-s6qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia8h-s6qs"/>`,
		"fallback": "coolicons:flag-checkered-round",
	});
}

export default Component;
