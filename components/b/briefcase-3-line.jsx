import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4dh6bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4dh6bxq"/>`,
		"fallback": "ri:briefcase-3-line",
	});
}

export default Component;
