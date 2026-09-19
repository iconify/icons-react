import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdan5fs-z.css';

const viewBox = {"width":154,"height":767};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdan5fs-z"/>`,
		"fallback": "ls:comma",
	});
}

export default Component;
