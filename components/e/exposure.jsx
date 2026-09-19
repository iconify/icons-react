import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n318iufmt.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n318iufmt"/>`,
		"fallback": "zmdi:exposure",
	});
}

export default Component;
