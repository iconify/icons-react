import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgm17v0ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgm17v0ea"/>`,
		"fallback": "iconoir:gas",
	});
}

export default Component;
