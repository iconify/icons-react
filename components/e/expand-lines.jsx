import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjmizab8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjmizab8y"/>`,
		"fallback": "iconoir:expand-lines",
	});
}

export default Component;
