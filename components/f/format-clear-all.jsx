import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzwhn-bgh.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzwhn-bgh"/>`,
		"fallback": "zmdi:format-clear-all",
	});
}

export default Component;
