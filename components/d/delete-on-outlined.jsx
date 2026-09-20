import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b86-lrckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b86-lrckp"/>`,
		"fallback": "weui:delete-on-outlined",
	});
}

export default Component;
