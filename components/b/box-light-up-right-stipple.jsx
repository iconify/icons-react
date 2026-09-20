import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j73zm9bhg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j73zm9bhg"/>`,
		"fallback": "memory:box-light-up-right-stipple",
	});
}

export default Component;
