import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1kigxb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1kigxb1f"/>`,
		"fallback": "thesvg-color:awesome-lists",
	});
}

export default Component;
