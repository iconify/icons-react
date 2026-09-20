import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5nqjs1-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5nqjs1-x"/>`,
		"fallback": "pinhead:four-legged-octopus",
	});
}

export default Component;
