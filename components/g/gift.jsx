import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcdvv7t8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcdvv7t8w"/>`,
		"fallback": "bxs:gift",
	});
}

export default Component;
