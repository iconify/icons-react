import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7s8hnfil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7s8hnfil"/>`,
		"fallback": "nrk:backward-end-expressive",
	});
}

export default Component;
