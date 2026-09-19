import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gobq3ijhg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gobq3ijhg"/>`,
		"fallback": "fa-solid:chair",
	});
}

export default Component;
