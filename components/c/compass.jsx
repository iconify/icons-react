import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr1bk8ial.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr1bk8ial"/>`,
		"fallback": "lineicons:compass",
	});
}

export default Component;
