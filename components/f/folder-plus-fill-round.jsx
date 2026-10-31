import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cij9bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cij9bpr"/>`,
		"fallback": "coolicons:folder-plus-fill-round",
	});
}

export default Component;
