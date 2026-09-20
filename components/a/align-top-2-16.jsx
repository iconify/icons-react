import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oapubcban.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oapubcban"/>`,
		"fallback": "qlementine-icons:align-top-2-16",
	});
}

export default Component;
