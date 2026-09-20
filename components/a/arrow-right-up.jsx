import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm-2r_bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm-2r_bee"/>`,
		"fallback": "reicon:arrow-right-up",
	});
}

export default Component;
