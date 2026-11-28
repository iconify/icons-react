import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv6j85bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv6j85bqd"/>`,
		"fallback": "iconaut:globe-pin-solid",
	});
}

export default Component;
