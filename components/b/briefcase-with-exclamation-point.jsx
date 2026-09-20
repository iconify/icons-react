import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohhcw2bzr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohhcw2bzr"/>`,
		"fallback": "pinhead:briefcase-with-exclamation-point",
	});
}

export default Component;
