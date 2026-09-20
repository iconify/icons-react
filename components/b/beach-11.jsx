import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh6odd6ns.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh6odd6ns"/>`,
		"fallback": "maki:beach-11",
	});
}

export default Component;
