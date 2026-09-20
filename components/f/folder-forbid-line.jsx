import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwkvf0b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwkvf0b1o"/>`,
		"fallback": "ri:folder-forbid-line",
	});
}

export default Component;
