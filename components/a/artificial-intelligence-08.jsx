import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta9uj4b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta9uj4b0a"/>`,
		"fallback": "hugeicons:artificial-intelligence-08",
	});
}

export default Component;
