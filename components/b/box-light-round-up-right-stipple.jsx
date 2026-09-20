import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrvnabcwx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrvnabcwx"/>`,
		"fallback": "memory:box-light-round-up-right-stipple",
	});
}

export default Component;
