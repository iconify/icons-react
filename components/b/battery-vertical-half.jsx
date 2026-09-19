import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8gg_bcnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8gg_bcnh"/>`,
		"fallback": "griddy-icons:battery-vertical-half",
	});
}

export default Component;
