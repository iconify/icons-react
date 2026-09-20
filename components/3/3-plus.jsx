import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa67-jbda.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa67-jbda"/>`,
		"fallback": "pinhead:3-plus",
	});
}

export default Component;
