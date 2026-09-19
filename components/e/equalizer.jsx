import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvq0_nb5f.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvq0_nb5f"/>`,
		"fallback": "zmdi:equalizer",
	});
}

export default Component;
