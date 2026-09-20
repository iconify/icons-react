import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbqt5xw6k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbqt5xw6k"/>`,
		"fallback": "pinhead:hawaii",
	});
}

export default Component;
