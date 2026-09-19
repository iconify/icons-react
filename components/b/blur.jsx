import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_-2k6bgt.css';

const viewBox = {"width":408,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_-2k6bgt"/>`,
		"fallback": "zmdi:blur",
	});
}

export default Component;
