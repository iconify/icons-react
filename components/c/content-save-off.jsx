import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnbv4uh6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnbv4uh6p"/>`,
		"fallback": "mdi:content-save-off",
	});
}

export default Component;
