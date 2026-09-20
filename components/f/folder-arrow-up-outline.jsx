import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdxqnzbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdxqnzbhq"/>`,
		"fallback": "mdi:folder-arrow-up-outline",
	});
}

export default Component;
