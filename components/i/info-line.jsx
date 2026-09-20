import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovn9bfb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovn9bfb3k"/>`,
		"fallback": "si:info-line",
	});
}

export default Component;
