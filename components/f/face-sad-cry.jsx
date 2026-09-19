import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvjcjwbei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvjcjwbei"/>`,
		"fallback": "fa6-solid:face-sad-cry",
	});
}

export default Component;
