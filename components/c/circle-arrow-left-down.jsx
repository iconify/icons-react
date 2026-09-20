import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl1csjl3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vl1csjl3r"/>`,
		"fallback": "reicon:circle-arrow-left-down",
	});
}

export default Component;
