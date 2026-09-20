import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w--j_2sqs.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w--j_2sqs"/>`,
		"fallback": "memory:box-light-dashed-horizontal",
	});
}

export default Component;
