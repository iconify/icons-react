import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjihjjnga.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjihjjnga"/>`,
		"fallback": "fa7-solid:border-all",
	});
}

export default Component;
