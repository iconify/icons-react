import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g30n8ubuk.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g30n8ubuk"/>`,
		"fallback": "osmic:cattle-grid-10",
	});
}

export default Component;
