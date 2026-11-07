import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdep0-bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdep0-bpc"/>`,
		"fallback": "solar:arrow-up-broken",
	});
}

export default Component;
