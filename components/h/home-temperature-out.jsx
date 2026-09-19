import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxo7j6bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxo7j6bat"/>`,
		"fallback": "iconoir:home-temperature-out",
	});
}

export default Component;
