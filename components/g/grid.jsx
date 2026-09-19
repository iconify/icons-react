import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzvvb0b5w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzvvb0b5w"/>`,
		"fallback": "dinkie-icons:grid",
	});
}

export default Component;
