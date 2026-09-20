import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg5skcb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg5skcb3y"/>`,
		"fallback": "proicons:arrow-redo",
	});
}

export default Component;
