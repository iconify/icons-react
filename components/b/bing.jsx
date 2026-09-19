import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr___x8pl.css';

const viewBox = {"width":464,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr___x8pl"/>`,
		"fallback": "ps:bing",
	});
}

export default Component;
