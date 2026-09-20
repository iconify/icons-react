import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1zl0kh5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1zl0kh5v"/>`,
		"fallback": "streamline:google-remix",
	});
}

export default Component;
