import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4hf3w3d.css';

const viewBox = {"width":432,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af4hf3w3d"/>`,
		"fallback": "zmdi:filter-frames",
	});
}

export default Component;
