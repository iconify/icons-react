import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifi7i0bji.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifi7i0bji"/>`,
		"fallback": "fa7-solid:burst",
	});
}

export default Component;
