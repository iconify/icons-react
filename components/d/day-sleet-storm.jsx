import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_a6-ubkz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_a6-ubkz"/>`,
		"fallback": "wi:day-sleet-storm",
	});
}

export default Component;
