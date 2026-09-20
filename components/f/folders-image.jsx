import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh6wf76bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh6wf76bi"/>`,
		"fallback": "mdi:folders-image",
	});
}

export default Component;
