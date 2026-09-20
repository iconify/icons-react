import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szjyx1f0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szjyx1f0b"/>`,
		"fallback": "uis:apps",
	});
}

export default Component;
