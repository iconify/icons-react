import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml0269bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml0269bhv"/>`,
		"fallback": "mdi:bug-start",
	});
}

export default Component;
