import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwv6sm2lh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwv6sm2lh"/>`,
		"fallback": "file-icons:font-outline",
	});
}

export default Component;
