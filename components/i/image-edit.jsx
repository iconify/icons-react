import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqk_9joly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqk_9joly"/>`,
		"fallback": "uil:image-edit",
	});
}

export default Component;
