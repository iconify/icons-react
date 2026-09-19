import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lehfdhbir.css';

const viewBox = {"width":470,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lehfdhbir"/>`,
		"fallback": "il:attachment",
	});
}

export default Component;
