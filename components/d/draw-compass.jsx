import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnwr_1bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnwr_1bhy"/>`,
		"fallback": "reicon:draw-compass",
	});
}

export default Component;
