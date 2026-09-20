import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhjgo3bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhjgo3bvz"/>`,
		"fallback": "pixel:align-center",
	});
}

export default Component;
