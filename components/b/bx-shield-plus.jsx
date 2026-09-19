import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytyrf4ord.css';
import '../../css/i/iyx3sgnar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytyrf4ord"/><path class="iyx3sgnar"/>`,
		"fallback": "bx:bx-shield-plus",
	});
}

export default Component;
