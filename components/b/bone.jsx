import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjcik80dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjcik80dj"/>`,
		"fallback": "reicon:bone",
	});
}

export default Component;
