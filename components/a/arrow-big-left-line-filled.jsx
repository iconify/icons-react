import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkrxt4bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkrxt4bmk"/>`,
		"fallback": "boxicons:arrow-big-left-line-filled",
	});
}

export default Component;
