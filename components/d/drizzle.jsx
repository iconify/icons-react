import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik3qoab9i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik3qoab9i"/>`,
		"fallback": "devicon:drizzle",
	});
}

export default Component;
