import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slhw7xb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slhw7xb9s"/>`,
		"fallback": "subway:call-4",
	});
}

export default Component;
