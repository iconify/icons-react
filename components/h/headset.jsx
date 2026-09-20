import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r904zvwij.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r904zvwij"/>`,
		"fallback": "picon:headset",
	});
}

export default Component;
