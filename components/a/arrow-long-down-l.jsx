import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iihu-ug8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iihu-ug8f"/>`,
		"fallback": "gg:arrow-long-down-l",
	});
}

export default Component;
