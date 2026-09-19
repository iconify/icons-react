import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwh3lrbby.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwh3lrbby"/>`,
		"fallback": "zmdi:dot-circle-alt",
	});
}

export default Component;
