import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrrss6b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrrss6b0w"/>`,
		"fallback": "sidekickicons:folder-arrow-up",
	});
}

export default Component;
