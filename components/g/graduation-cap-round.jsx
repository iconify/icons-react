import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6yzllbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6yzllbtl"/>`,
		"fallback": "coolicons:graduation-cap-round",
	});
}

export default Component;
