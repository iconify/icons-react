import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v116ycm1r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v116ycm1r"/>`,
		"fallback": "f7:arrow-left-circle",
	});
}

export default Component;
