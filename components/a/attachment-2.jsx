import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onb2t3bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onb2t3bho"/>`,
		"fallback": "ri:attachment-2",
	});
}

export default Component;
