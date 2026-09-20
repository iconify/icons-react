import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6dbjw9zi.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6dbjw9zi"/>`,
		"fallback": "lineicons:chevron-down",
	});
}

export default Component;
