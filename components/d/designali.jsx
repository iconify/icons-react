import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnx5jt5yo.css';

const viewBox = {"width":1440,"height":1440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnx5jt5yo"/>`,
		"fallback": "thesvg-color:designali",
	});
}

export default Component;
