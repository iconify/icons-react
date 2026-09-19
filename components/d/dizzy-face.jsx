import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-qd-obzs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-qd-obzs"/>`,
		"fallback": "dinkie-icons:dizzy-face",
	});
}

export default Component;
