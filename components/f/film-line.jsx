import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4-vycwzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4-vycwzs"/>`,
		"fallback": "ri:film-line",
	});
}

export default Component;
