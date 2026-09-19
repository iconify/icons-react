import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj4hj9b4h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj4hj9b4h"/>`,
		"fallback": "f7:arrow-3-trianglepath",
	});
}

export default Component;
