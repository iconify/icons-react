import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/til_wmyiv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="til_wmyiv"/>`,
		"fallback": "fa6-regular:face-laugh",
	});
}

export default Component;
