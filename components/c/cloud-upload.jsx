import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7vcwzxho.css';

const viewBox = {"width":1920,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7vcwzxho"/>`,
		"fallback": "fa:cloud-upload",
	});
}

export default Component;
