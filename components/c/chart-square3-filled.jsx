import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri9akzb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri9akzb-c"/>`,
		"fallback": "reicon:chart-square3-filled",
	});
}

export default Component;
