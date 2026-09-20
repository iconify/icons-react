import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft4l_3bzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft4l_3bzc"/>`,
		"fallback": "oui:aggregate",
	});
}

export default Component;
