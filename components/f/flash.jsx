import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt2kzbb-y.css';

const viewBox = {"width":216,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt2kzbb-y"/>`,
		"fallback": "zmdi:flash",
	});
}

export default Component;
