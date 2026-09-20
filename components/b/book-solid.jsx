import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2f8wozq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2f8wozq"/>`,
		"fallback": "mynaui:book-solid",
	});
}

export default Component;
