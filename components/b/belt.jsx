import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-6_3-bvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-6_3-bvk"/>`,
		"fallback": "game-icons:belt",
	});
}

export default Component;
