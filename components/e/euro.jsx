import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkw7e0b0z.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkw7e0b0z"/>`,
		"fallback": "lineicons:euro",
	});
}

export default Component;
