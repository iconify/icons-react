import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7edix8yx.css';
import '../../css/f/f-emzobbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7edix8yx"/><path class="f-emzobbf"/>`,
		"fallback": "boxicons:chevrons-down-filled",
	});
}

export default Component;
