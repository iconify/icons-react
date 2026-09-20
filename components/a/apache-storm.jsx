import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4l4iwb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4l4iwb9c"/>`,
		"fallback": "thesvg-color:apache-storm",
	});
}

export default Component;
