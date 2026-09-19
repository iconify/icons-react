import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn7jf3uuf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn7jf3uuf"/>`,
		"fallback": "garden:123-fill-12",
	});
}

export default Component;
