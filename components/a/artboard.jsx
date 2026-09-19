import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld2p2fbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld2p2fbvv"/>`,
		"fallback": "fe:artboard",
	});
}

export default Component;
