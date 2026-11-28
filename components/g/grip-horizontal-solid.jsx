import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0n7mtbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0n7mtbbc"/>`,
		"fallback": "iconaut:grip-horizontal-solid",
	});
}

export default Component;
