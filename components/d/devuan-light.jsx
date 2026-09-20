import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eev7bvb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eev7bvb0f"/>`,
		"fallback": "selfhst:devuan-light",
	});
}

export default Component;
