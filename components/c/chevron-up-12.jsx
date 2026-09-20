import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbjau4brm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbjau4brm"/>`,
		"fallback": "octicon:chevron-up-12",
	});
}

export default Component;
