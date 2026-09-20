import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaa78xbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaa78xbak"/>`,
		"fallback": "pixel:globe-americas",
	});
}

export default Component;
