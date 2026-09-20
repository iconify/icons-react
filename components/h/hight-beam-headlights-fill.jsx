import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opikm--fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opikm--fj"/>`,
		"fallback": "mingcute:hight-beam-headlights-fill",
	});
}

export default Component;
