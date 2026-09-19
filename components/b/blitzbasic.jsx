import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4plitbjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4plitbjm"/>`,
		"fallback": "file-icons:blitzbasic",
	});
}

export default Component;
