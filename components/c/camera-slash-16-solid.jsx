import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb4sskw9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cb4sskw9l"/>`,
		"fallback": "sidekickicons:camera-slash-16-solid",
	});
}

export default Component;
