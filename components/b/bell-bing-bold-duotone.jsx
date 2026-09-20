import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9xycefpv.css';
import '../../css/w/w9ster-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9xycefpv"/><path class="w9ster-bi"/>`,
		"fallback": "solar:bell-bing-bold-duotone",
	});
}

export default Component;
