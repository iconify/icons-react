import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrzv76bsu.css';
import '../../css/o/o1izntgqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrzv76bsu"/><path class="o1izntgqb"/>`,
		"fallback": "token:gymnet",
	});
}

export default Component;
