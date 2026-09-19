import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6g1_dr5z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6g1_dr5z"/>`,
		"fallback": "f7:bubble-middle-top",
	});
}

export default Component;
