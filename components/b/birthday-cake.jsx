import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgfmpuuky.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgfmpuuky"/>`,
		"fallback": "dinkie-icons:birthday-cake",
	});
}

export default Component;
