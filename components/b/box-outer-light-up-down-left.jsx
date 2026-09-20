import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njeypru3d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njeypru3d"/>`,
		"fallback": "memory:box-outer-light-up-down-left",
	});
}

export default Component;
