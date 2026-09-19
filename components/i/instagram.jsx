import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji20hbb1c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji20hbb1c"/>`,
		"fallback": "dinkie-icons:instagram",
	});
}

export default Component;
