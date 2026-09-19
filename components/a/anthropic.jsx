import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqk6m141h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b cqk6m141h"/>`,
		"fallback": "bxl:anthropic",
	});
}

export default Component;
