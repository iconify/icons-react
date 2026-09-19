import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0b4gnb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0b4gnb7n"/>`,
		"fallback": "griddy-icons:android-filled",
	});
}

export default Component;
