import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z85omn0_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z85omn0_t"/>`,
		"fallback": "mdi:arrow-down-thin-circle-outline",
	});
}

export default Component;
