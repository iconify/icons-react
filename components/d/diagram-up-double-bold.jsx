import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vupesl-hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vupesl-hm"/>`,
		"fallback": "streamline-ultimate:diagram-up-double-bold",
	});
}

export default Component;
