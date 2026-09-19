import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6uj5ccbk.css';
import '../../css/v/vod56msze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6uj5ccbk"/><path class="vod56msze"/>`,
		"fallback": "bxl:figma-alt",
	});
}

export default Component;
