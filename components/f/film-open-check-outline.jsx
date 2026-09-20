import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4o5u6otg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4o5u6otg"/>`,
		"fallback": "mdi:film-open-check-outline",
	});
}

export default Component;
