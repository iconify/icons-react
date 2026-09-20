import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtpr4ibiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtpr4ibiq"/>`,
		"fallback": "zondicons:hand-stop",
	});
}

export default Component;
