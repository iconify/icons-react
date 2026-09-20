import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_3zk5bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_3zk5bwr"/>`,
		"fallback": "mdi:cloud-plus",
	});
}

export default Component;
