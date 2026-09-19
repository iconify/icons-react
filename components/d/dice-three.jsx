import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sasmg8j9e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sasmg8j9e"/>`,
		"fallback": "fa6-solid:dice-three",
	});
}

export default Component;
