import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vipz4vb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vipz4vb4t"/>`,
		"fallback": "ri:git-branch-fill",
	});
}

export default Component;
