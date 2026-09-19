import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d446dnvwr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d446dnvwr"/>`,
		"fallback": "dinkie-icons:die-face1-filled",
	});
}

export default Component;
