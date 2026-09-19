import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7tlcot9k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7tlcot9k"/>`,
		"fallback": "f7:car-fill",
	});
}

export default Component;
