import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8yywaboc.css';

const viewBox = {"width":1349,"height":519};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8yywaboc"/>`,
		"fallback": "thesvg-color:babel",
	});
}

export default Component;
