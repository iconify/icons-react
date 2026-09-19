import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsj0y6bqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsj0y6bqv"/>`,
		"fallback": "carbon:flow-data",
	});
}

export default Component;
