import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26louw3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g26louw3j"/>`,
		"fallback": "ri:gps-line",
	});
}

export default Component;
