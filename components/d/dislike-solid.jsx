import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmuni9p9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmuni9p9n"/>`,
		"fallback": "basil:dislike-solid",
	});
}

export default Component;
