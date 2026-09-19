import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2wti8bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2wti8bik"/>`,
		"fallback": "ci:home-fill",
	});
}

export default Component;
