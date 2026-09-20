import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5e20cb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5e20cb8q"/>`,
		"fallback": "uil:arrow-left",
	});
}

export default Component;
