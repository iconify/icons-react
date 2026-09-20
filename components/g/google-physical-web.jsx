import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7wb0ibza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7wb0ibza"/>`,
		"fallback": "mdi:google-physical-web",
	});
}

export default Component;
