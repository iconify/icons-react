import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl9hrzz9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl9hrzz9f"/>`,
		"fallback": "simple-icons:aparat",
	});
}

export default Component;
