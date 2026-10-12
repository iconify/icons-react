import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aum6tgm0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aum6tgm0e"/>`,
		"fallback": "andrsrxn:ease-linear",
	});
}

export default Component;
