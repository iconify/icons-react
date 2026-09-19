import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mruly6l5j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mruly6l5j"/>`,
		"fallback": "fa-solid:font",
	});
}

export default Component;
