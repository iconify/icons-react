import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uva2xdm3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uva2xdm3y"/>`,
		"fallback": "uil:image-broken",
	});
}

export default Component;
