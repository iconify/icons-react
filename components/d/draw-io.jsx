import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xq4ewmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xq4ewmx"/>`,
		"fallback": "file-icons:draw-io",
	});
}

export default Component;
