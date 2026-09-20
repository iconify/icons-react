import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv54xkpie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv54xkpie"/>`,
		"fallback": "solar:heart-broken-linear",
	});
}

export default Component;
