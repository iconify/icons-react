import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hubdunbbu.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hubdunbbu"/>`,
		"fallback": "ps:digg-alt",
	});
}

export default Component;
