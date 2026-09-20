import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9cm65b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9cm65b6l"/>`,
		"fallback": "pixel:arrow-circle-down-solid",
	});
}

export default Component;
