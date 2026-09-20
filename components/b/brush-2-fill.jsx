import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4boyfb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4boyfb4l"/>`,
		"fallback": "ri:brush-2-fill",
	});
}

export default Component;
