import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggbltf6qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggbltf6qz"/>`,
		"fallback": "mdi:avalanche",
	});
}

export default Component;
