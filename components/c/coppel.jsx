import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffdm4s4lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffdm4s4lv"/>`,
		"fallback": "simple-icons:coppel",
	});
}

export default Component;
