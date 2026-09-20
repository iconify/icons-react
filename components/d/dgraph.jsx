import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qic13w4zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qic13w4zc"/>`,
		"fallback": "thesvg-color:dgraph",
	});
}

export default Component;
