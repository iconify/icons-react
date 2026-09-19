import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh_b-1uye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh_b-1uye"/>`,
		"fallback": "griddy-icons:bereal",
	});
}

export default Component;
