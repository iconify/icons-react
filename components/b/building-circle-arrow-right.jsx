import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilakvvs7c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilakvvs7c"/>`,
		"fallback": "fa7-solid:building-circle-arrow-right",
	});
}

export default Component;
