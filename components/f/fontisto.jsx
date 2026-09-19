import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehy36_bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehy36_bjl"/>`,
		"fallback": "fontisto:fontisto",
	});
}

export default Component;
