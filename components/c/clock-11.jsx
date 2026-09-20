import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mphqjt4dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mphqjt4dm"/>`,
		"fallback": "keyline-icons:clock-11",
	});
}

export default Component;
