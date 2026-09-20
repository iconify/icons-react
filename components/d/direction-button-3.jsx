import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcxr8acbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcxr8acbc"/>`,
		"fallback": "streamline-ultimate:direction-button-3",
	});
}

export default Component;
