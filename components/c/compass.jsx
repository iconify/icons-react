import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr8-a7llk.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr8-a7llk"/>`,
		"fallback": "il:compass",
	});
}

export default Component;
