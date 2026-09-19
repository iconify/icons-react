import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohbuwb6x.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rohbuwb6x"/>`,
		"fallback": "whh:bookmarkalt",
	});
}

export default Component;
