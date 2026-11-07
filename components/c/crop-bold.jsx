import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wygv-re1g.css';
import '../../css/t/t6-wmjb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wygv-re1g"/><path class="t6-wmjb2y"/>`,
		"fallback": "solar:crop-bold",
	});
}

export default Component;
