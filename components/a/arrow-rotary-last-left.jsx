import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgofl8jdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgofl8jdt"/>`,
		"fallback": "tabler:arrow-rotary-last-left",
	});
}

export default Component;
