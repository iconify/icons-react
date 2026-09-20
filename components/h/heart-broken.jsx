import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbzch1bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbzch1bsd"/>`,
		"fallback": "reicon:heart-broken",
	});
}

export default Component;
