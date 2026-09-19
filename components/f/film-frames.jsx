import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f196jybrd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f196jybrd"/>`,
		"fallback": "dinkie-icons:film-frames",
	});
}

export default Component;
