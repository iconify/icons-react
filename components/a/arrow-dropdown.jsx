import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-k_55dvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-k_55dvq"/>`,
		"fallback": "nrk:arrow-dropdown",
	});
}

export default Component;
