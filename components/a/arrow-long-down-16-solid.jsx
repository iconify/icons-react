import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjlwf8m8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vjlwf8m8q"/>`,
		"fallback": "heroicons:arrow-long-down-16-solid",
	});
}

export default Component;
