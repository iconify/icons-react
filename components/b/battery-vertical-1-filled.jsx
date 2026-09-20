import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj4qumg9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj4qumg9i"/>`,
		"fallback": "tabler:battery-vertical-1-filled",
	});
}

export default Component;
