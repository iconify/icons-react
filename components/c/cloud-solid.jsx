import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5-b86y2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5-b86y2t"/>`,
		"fallback": "basil:cloud-solid",
	});
}

export default Component;
