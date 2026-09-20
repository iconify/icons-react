import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2fmple7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2fmple7f"/>`,
		"fallback": "mdi:format-line-weight",
	});
}

export default Component;
