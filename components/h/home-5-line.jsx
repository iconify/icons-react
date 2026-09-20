import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tteo7nbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tteo7nbtl"/>`,
		"fallback": "ri:home-5-line",
	});
}

export default Component;
