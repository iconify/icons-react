import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wax_9p6id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wax_9p6id"/>`,
		"fallback": "tabler:building-search",
	});
}

export default Component;
