import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eia0otz9f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eia0otz9f"/>`,
		"fallback": "streamline-color:cellular-network-5g",
	});
}

export default Component;
