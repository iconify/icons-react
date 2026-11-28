import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zktde8bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zktde8bpo"/>`,
		"fallback": "noviair-light:door",
	});
}

export default Component;
