import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtdrmnbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtdrmnbpf"/>`,
		"fallback": "withicons:corner-up-right-gloss",
	});
}

export default Component;
