import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rup5qzhbu.css';

const viewBox = {"width":616,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rup5qzhbu"/>`,
		"fallback": "ls:dropdown",
	});
}

export default Component;
