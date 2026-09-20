import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdom31c5r.css';
import '../../css/w/wp43u2bcy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdom31c5r"/><path class="wp43u2bcy"/>`,
		"fallback": "lineicons:harddrive",
	});
}

export default Component;
