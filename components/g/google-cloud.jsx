import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsr7ex80b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsr7ex80b"/>`,
		"fallback": "lineicons:google-cloud",
	});
}

export default Component;
