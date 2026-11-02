import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py38cvbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py38cvbqq"/>`,
		"fallback": "mingcute:documents-line",
	});
}

export default Component;
