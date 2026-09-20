import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqgb_dwuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqgb_dwuh"/>`,
		"fallback": "tabler:device-tv-old",
	});
}

export default Component;
