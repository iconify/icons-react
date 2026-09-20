import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj2ffonau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj2ffonau"/>`,
		"fallback": "thesvg-color:edx",
	});
}

export default Component;
