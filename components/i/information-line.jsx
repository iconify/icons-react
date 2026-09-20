import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezs-mub0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezs-mub0m"/>`,
		"fallback": "ri:information-line",
	});
}

export default Component;
