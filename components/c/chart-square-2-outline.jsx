import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a80tgwu0u.css';
import '../../css/x/xyha35u6p.css';
import '../../css/o/o7r3dj7hi.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a80tgwu0u"/><path class="xyha35u6p"/><path class="o7r3dj7hi"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:chart-square-2-outline",
	});
}

export default Component;
