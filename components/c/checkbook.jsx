import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdab8wejo.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdab8wejo"/>`,
		"fallback": "wpf:checkbook",
	});
}

export default Component;
