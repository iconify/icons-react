import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtw1_oswe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtw1_oswe"/>`,
		"fallback": "dinkie-icons:desktop-computer-small",
	});
}

export default Component;
