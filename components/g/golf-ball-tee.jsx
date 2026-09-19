import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urzpa-bxu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urzpa-bxu"/>`,
		"fallback": "fa6-solid:golf-ball-tee",
	});
}

export default Component;
