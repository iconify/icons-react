import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbd42eb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbd42eb3s"/>`,
		"fallback": "tabler:arrow-big-up-line-filled",
	});
}

export default Component;
