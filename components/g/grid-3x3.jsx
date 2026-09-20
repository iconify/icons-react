import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o65s8tnxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o65s8tnxe"/>`,
		"fallback": "tabler:grid-3x3",
	});
}

export default Component;
