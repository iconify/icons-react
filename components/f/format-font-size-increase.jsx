import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywxi7zk5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywxi7zk5o"/>`,
		"fallback": "mdi:format-font-size-increase",
	});
}

export default Component;
