import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b70fpkbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b70fpkbnp"/>`,
		"fallback": "coolicons:building-1-round",
	});
}

export default Component;
