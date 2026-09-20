import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxg0005bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxg0005bo"/>`,
		"fallback": "thesvg-color:cooler-master",
	});
}

export default Component;
