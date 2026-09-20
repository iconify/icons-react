import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk3q6nbal.css';
import '../../css/z/z1mt3ubli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk3q6nbal"/><path class="z1mt3ubli"/>`,
		"fallback": "selfhst:cronicle",
	});
}

export default Component;
