import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elov1abin.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elov1abin"/>`,
		"fallback": "carbon:align-horizontal-center",
	});
}

export default Component;
