import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlgy8mm_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlgy8mm_t"/>`,
		"fallback": "boxicons:alarm-check-filled",
	});
}

export default Component;
