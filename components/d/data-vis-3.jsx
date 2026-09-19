import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5xq4ubgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5xq4ubgv"/>`,
		"fallback": "carbon:data-vis-3",
	});
}

export default Component;
