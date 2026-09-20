import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx699ab2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx699ab2j"/>`,
		"fallback": "mdi:arrow-top-left-thin-circle-outline",
	});
}

export default Component;
