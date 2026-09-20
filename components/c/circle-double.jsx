import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfm2rwbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfm2rwbpl"/>`,
		"fallback": "mdi:circle-double",
	});
}

export default Component;
