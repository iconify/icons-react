import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/t/tase98tfq.css';
import '../../css/p/pob85mb3x.css';
import '../../css/a/avdzeya6q.css';
import '../../css/c/c8yuot4zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="tase98tfq"/><path class="pob85mb3x"/><path class="avdzeya6q"/><path class="c8yuot4zz"/></g>`,
		"fallback": "solar:grid-2x2-add-broken",
	});
}

export default Component;
