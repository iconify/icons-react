import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny4i4fb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny4i4fb7e"/>`,
		"fallback": "solar:body-broken",
	});
}

export default Component;
