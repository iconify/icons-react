import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnh3-2b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnh3-2b2a"/>`,
		"fallback": "ri:arrow-left-long-fill",
	});
}

export default Component;
