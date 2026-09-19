import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jchvpjb5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jchvpjb5z"/>`,
		"fallback": "fa6-solid:circle-notch",
	});
}

export default Component;
