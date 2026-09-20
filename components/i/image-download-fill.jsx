import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzs07zk9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzs07zk9o"/>`,
		"fallback": "ri:image-download-fill",
	});
}

export default Component;
