import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9yn-b0zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9yn-b0zf"/>`,
		"fallback": "boxicons:flower-alt-2-filled",
	});
}

export default Component;
