import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll9pedc-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll9pedc-e"/>`,
		"fallback": "lineicons:discord",
	});
}

export default Component;
