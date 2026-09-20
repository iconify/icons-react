import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sen0zg3ys.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sen0zg3ys"/>`,
		"fallback": "pinhead:handled-teacup",
	});
}

export default Component;
