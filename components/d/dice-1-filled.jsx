import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhpu1ys3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhpu1ys3d"/>`,
		"fallback": "boxicons:dice-1-filled",
	});
}

export default Component;
