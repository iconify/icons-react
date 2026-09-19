import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr5t1zbtc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr5t1zbtc"/>`,
		"fallback": "fa7-solid:circle-minus",
	});
}

export default Component;
