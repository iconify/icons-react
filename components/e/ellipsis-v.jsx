import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxz5dobuy.css';

const viewBox = {"width":384,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxz5dobuy"/>`,
		"fallback": "fa:ellipsis-v",
	});
}

export default Component;
