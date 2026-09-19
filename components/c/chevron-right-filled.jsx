import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5gi3b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5gi3b6f"/>`,
		"fallback": "boxicons:chevron-right-filled",
	});
}

export default Component;
