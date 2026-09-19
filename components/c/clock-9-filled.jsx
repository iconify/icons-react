import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e693plb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e693plb3w"/>`,
		"fallback": "boxicons:clock-9-filled",
	});
}

export default Component;
