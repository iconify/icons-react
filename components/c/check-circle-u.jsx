import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmfmj4yhr.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmfmj4yhr"/>`,
		"fallback": "zmdi:check-circle-u",
	});
}

export default Component;
