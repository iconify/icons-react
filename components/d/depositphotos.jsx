import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytzj93bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytzj93bka"/>`,
		"fallback": "simple-icons:depositphotos",
	});
}

export default Component;
