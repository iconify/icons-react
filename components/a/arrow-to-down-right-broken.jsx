import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbw2ks26y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbw2ks26y"/>`,
		"fallback": "solar:arrow-to-down-right-broken",
	});
}

export default Component;
