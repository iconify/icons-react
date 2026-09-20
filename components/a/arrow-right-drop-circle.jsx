import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmh0rwbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmh0rwbmq"/>`,
		"fallback": "mdi:arrow-right-drop-circle",
	});
}

export default Component;
