import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp02h-b8d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp02h-b8d"/>`,
		"fallback": "garden:bookmark-stroke-12",
	});
}

export default Component;
