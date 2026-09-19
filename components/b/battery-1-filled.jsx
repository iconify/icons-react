import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bin6v8b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bin6v8b5j"/>`,
		"fallback": "boxicons:battery-1-filled",
	});
}

export default Component;
