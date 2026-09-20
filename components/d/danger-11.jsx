import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wto57b17c.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wto57b17c"/>`,
		"fallback": "maki:danger-11",
	});
}

export default Component;
