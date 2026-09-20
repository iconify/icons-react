import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc-kidcwo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc-kidcwo"/>`,
		"fallback": "pinhead:511",
	});
}

export default Component;
