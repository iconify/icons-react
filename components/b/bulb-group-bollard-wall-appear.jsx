import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvatv5_qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvatv5_qi"/>`,
		"fallback": "cbi:bulb-group-bollard-wall-appear",
	});
}

export default Component;
