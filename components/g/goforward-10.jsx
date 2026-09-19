import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydmk_8akd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydmk_8akd"/>`,
		"fallback": "f7:goforward-10",
	});
}

export default Component;
