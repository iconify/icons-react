import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu0pypbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu0pypbvr"/>`,
		"fallback": "cbi:co2",
	});
}

export default Component;
