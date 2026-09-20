import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iov44abdy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iov44abdy"/>`,
		"fallback": "pinhead:chicane-arrow-up",
	});
}

export default Component;
