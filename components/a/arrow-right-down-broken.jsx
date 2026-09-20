import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r908o0etm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r908o0etm"/>`,
		"fallback": "solar:arrow-right-down-broken",
	});
}

export default Component;
