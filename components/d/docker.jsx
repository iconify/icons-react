import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0n_sqb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0n_sqb5v"/>`,
		"fallback": "pixelarticons:docker",
	});
}

export default Component;
