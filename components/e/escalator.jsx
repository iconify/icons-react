import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfquvsb1v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfquvsb1v"/>`,
		"fallback": "pinhead:escalator",
	});
}

export default Component;
