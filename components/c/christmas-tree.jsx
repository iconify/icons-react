import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1ofdbc8y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1ofdbc8y"/>`,
		"fallback": "dinkie-icons:christmas-tree",
	});
}

export default Component;
