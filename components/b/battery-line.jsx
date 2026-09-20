import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npak40b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npak40b9f"/>`,
		"fallback": "majesticons:battery-line",
	});
}

export default Component;
