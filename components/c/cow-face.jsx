import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsabh2boj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsabh2boj"/>`,
		"fallback": "dinkie-icons:cow-face",
	});
}

export default Component;
