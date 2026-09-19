import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywm2orvft.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywm2orvft"/>`,
		"fallback": "zmdi:dns",
	});
}

export default Component;
