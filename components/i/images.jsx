import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmc6bf_jc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmc6bf_jc"/>`,
		"fallback": "fa6-solid:images",
	});
}

export default Component;
