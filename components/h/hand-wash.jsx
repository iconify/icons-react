import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3zgf-b2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3zgf-b2c"/>`,
		"fallback": "ps:hand-wash",
	});
}

export default Component;
