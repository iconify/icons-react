import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkss39bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkss39bnm"/>`,
		"fallback": "ri:clockwise-2-fill",
	});
}

export default Component;
