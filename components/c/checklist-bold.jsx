import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad56-ac1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad56-ac1s"/>`,
		"fallback": "streamline-ultimate:checklist-bold",
	});
}

export default Component;
