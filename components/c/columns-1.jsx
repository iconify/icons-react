import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g30ii7bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g30ii7bfv"/>`,
		"fallback": "tabler:columns-1",
	});
}

export default Component;
