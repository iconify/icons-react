import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ovedbwx.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9ovedbwx"/>`,
		"fallback": "fa6-solid:arrow-down-up-across-line",
	});
}

export default Component;
