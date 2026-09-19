import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-ki4cbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-ki4cbhf"/>`,
		"fallback": "boxicons:hot-tub-filled",
	});
}

export default Component;
