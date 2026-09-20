import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t39xeubio.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t39xeubio"/>`,
		"fallback": "pinhead:crosswalk-markings-dots",
	});
}

export default Component;
