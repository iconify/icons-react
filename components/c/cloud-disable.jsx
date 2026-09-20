import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd6x0abcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd6x0abcv"/>`,
		"fallback": "streamline-cyber:cloud-disable",
	});
}

export default Component;
