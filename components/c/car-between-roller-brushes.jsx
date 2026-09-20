import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asgq9kb6z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asgq9kb6z"/>`,
		"fallback": "pinhead:car-between-roller-brushes",
	});
}

export default Component;
