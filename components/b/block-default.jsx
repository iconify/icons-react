import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxbev_bjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxbev_bjz"/>`,
		"fallback": "dashicons:block-default",
	});
}

export default Component;
