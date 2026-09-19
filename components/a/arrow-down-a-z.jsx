import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxxysjz2a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxxysjz2a"/>`,
		"fallback": "fa6-solid:arrow-down-a-z",
	});
}

export default Component;
