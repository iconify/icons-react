import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1x6qhb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1x6qhb7u"/>`,
		"fallback": "thesvg-color:eslgaming",
	});
}

export default Component;
