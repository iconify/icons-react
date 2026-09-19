import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tamtjcbfm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tamtjcbfm"/>`,
		"fallback": "fa7-solid:house-crack",
	});
}

export default Component;
