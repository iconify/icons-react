import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usxi8y_4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usxi8y_4j"/>`,
		"fallback": "fe:heart",
	});
}

export default Component;
