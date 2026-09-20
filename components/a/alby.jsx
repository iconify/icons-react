import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xll1rbcfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xll1rbcfh"/>`,
		"fallback": "thesvg:alby",
	});
}

export default Component;
