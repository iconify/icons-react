import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/a/a8zg1pdpv.css';
import '../../css/b/b80t6qbns.css';
import '../../css/m/m50idfmqp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="a8zg1pdpv"/><path class="b80t6qbns"/><path class="m50idfmqp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-solomon-islands",
	});
}

export default Component;
