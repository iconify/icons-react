import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugu5vab6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugu5vab6m"/>`,
		"fallback": "mdi:human-kayaking",
	});
}

export default Component;
