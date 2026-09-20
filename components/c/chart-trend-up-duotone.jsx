import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpd0j0tem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpd0j0tem"/>`,
		"fallback": "stash:chart-trend-up-duotone",
	});
}

export default Component;
