import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eowcfacat.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eowcfacat"/>`,
		"fallback": "pinhead:boat-on-trailer-on-ramp-on-water",
	});
}

export default Component;
