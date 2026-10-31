import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndcj8zbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndcj8zbpr"/>`,
		"fallback": "coolicons:distribute-horizontal-fill-round",
	});
}

export default Component;
