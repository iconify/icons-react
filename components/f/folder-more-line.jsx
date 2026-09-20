import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9nyhsbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9nyhsbyt"/>`,
		"fallback": "mingcute:folder-more-line",
	});
}

export default Component;
