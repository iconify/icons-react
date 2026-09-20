import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c17c66b6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c17c66b6y"/>`,
		"fallback": "pinhead:aerial-platter-lift",
	});
}

export default Component;
