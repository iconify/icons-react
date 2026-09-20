import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy-z4jbjb.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy-z4jbjb"/>`,
		"fallback": "maki:bridge-11",
	});
}

export default Component;
