import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq8ti6bee.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq8ti6bee"/>`,
		"fallback": "jam:chevrons-circle-down-left",
	});
}

export default Component;
