import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqgmy6osx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqgmy6osx"/>`,
		"fallback": "mingcute:coin-3-line",
	});
}

export default Component;
