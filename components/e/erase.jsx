import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysmh8gbnt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysmh8gbnt"/>`,
		"fallback": "si-glyph:erase",
	});
}

export default Component;
