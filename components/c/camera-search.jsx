import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vijc33lrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vijc33lrq"/>`,
		"fallback": "noviair:camera-search",
	});
}

export default Component;
