import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scv5m7bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scv5m7bxd"/>`,
		"fallback": "mynaui:indifferent-ghost-solid",
	});
}

export default Component;
