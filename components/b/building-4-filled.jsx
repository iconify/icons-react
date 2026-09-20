import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxjr4wgbv.css';
import '../../css/z/z-gn40b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxjr4wgbv"/><path class="z-gn40b5q"/>`,
		"fallback": "tdesign:building-4-filled",
	});
}

export default Component;
