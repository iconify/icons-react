import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w13_1eb6v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w13_1eb6v"/>`,
		"fallback": "temaki:clothes-hanger",
	});
}

export default Component;
