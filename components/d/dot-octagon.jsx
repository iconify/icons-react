import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5f5335vk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5f5335vk"/>`,
		"fallback": "memory:dot-octagon",
	});
}

export default Component;
