import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4wb_bqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4wb_bqv"/>`,
		"fallback": "carbon:deployment-unit-technical-data",
	});
}

export default Component;
