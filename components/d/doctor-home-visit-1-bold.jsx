import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzzun0bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzzun0bwv"/>`,
		"fallback": "streamline-ultimate:doctor-home-visit-1-bold",
	});
}

export default Component;
