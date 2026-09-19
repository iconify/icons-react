import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onyqr8g1f.css';
import '../../css/a/a5ljf0bmb.css';
import '../../css/h/hcj7zv6_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onyqr8g1f"/><path class="a5ljf0bmb"/><path class="hcj7zv6_q"/>`,
		"fallback": "flag:bg-1x1",
	});
}

export default Component;
