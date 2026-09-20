import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qksruit4k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qksruit4k"/>`,
		"fallback": "pinhead:heart-shaped-carriage",
	});
}

export default Component;
