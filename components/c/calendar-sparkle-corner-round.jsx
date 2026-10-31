import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmkgw6vvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmkgw6vvv"/>`,
		"fallback": "coolicons:calendar-sparkle-corner-round",
	});
}

export default Component;
