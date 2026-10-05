import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xem9_test.css';
import '../../css/e/e2nzkvbqx.css';
import '../../css/b/b-rxv4bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xem9_test"/><path class="e2nzkvbqx"/><path class="b-rxv4bhf"/></g>`,
		"fallback": "matita:home",
	});
}

export default Component;
