import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls9339kws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls9339kws"/>`,
		"fallback": "mdi:format-heading-4",
	});
}

export default Component;
