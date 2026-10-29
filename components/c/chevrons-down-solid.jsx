import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q77j6ob-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q77j6ob-v"/>`,
		"fallback": "withicons:chevrons-down-solid",
	});
}

export default Component;
