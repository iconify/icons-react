import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk0giub_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk0giub_l"/>`,
		"fallback": "withicons:circle-stop-solid",
	});
}

export default Component;
