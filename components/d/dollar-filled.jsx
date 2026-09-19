import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq99v4b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq99v4b0l"/>`,
		"fallback": "boxicons:dollar-filled",
	});
}

export default Component;
