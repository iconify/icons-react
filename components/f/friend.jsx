import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6s60-s9p.css';

const viewBox = {"width":819,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6s60-s9p"/>`,
		"fallback": "ls:friend",
	});
}

export default Component;
