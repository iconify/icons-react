import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3jht4bnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3jht4bnv"/>`,
		"fallback": "garden:globe-stroke-20",
	});
}

export default Component;
