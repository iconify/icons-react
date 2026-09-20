import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwe37rb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwe37rb4m"/>`,
		"fallback": "ri:goblet-2-line",
	});
}

export default Component;
