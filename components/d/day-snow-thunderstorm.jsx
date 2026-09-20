import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig_zqygux.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig_zqygux"/>`,
		"fallback": "wi:day-snow-thunderstorm",
	});
}

export default Component;
