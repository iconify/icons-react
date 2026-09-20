import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qai1goviu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qai1goviu"/>`,
		"fallback": "thesvg-color:grocy",
	});
}

export default Component;
