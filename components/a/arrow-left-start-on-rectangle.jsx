import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geimf9b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geimf9b3b"/>`,
		"fallback": "heroicons:arrow-left-start-on-rectangle",
	});
}

export default Component;
