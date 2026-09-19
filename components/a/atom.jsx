import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a87gm4bri.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a87gm4bri"/>`,
		"fallback": "dinkie-icons:atom",
	});
}

export default Component;
