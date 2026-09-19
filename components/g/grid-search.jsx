import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/int8bcbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b int8bcbyk"/>`,
		"fallback": "boxicons:grid-search",
	});
}

export default Component;
