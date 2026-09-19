import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxoh7_kwo.css';
import '../../css/j/jjd6ecb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxoh7_kwo"/><path class="jjd6ecb5q"/>`,
		"fallback": "boxicons:building-hospital",
	});
}

export default Component;
