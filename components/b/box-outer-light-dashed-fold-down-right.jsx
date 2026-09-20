import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp70-nopp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp70-nopp"/>`,
		"fallback": "memory:box-outer-light-dashed-fold-down-right",
	});
}

export default Component;
