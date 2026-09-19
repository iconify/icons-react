import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5n-u7bcg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5n-u7bcg"/>`,
		"fallback": "fa7-solid:grip-lines",
	});
}

export default Component;
