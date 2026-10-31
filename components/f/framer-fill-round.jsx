import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t246jdb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t246jdb6i"/>`,
		"fallback": "coolicons:framer-fill-round",
	});
}

export default Component;
