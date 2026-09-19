import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrojon6us.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrojon6us"/>`,
		"fallback": "whh:crayon",
	});
}

export default Component;
