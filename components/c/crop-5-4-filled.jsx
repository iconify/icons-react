import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yztl9nsel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yztl9nsel"/>`,
		"fallback": "tabler:crop-5-4-filled",
	});
}

export default Component;
