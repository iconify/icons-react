import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr2addc-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr2addc-o"/>`,
		"fallback": "tabler:circle-dotted-letter-a",
	});
}

export default Component;
