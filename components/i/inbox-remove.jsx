import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9z2m933w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9z2m933w"/>`,
		"fallback": "mdi:inbox-remove",
	});
}

export default Component;
