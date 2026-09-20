import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/h/h8ttso15c.css';
import '../../css/q/qjbnnpb_q.css';
import '../../css/o/osksbqb8y.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="h8ttso15c"/><path class="qjbnnpb_q"/><path class="osksbqb8y"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-chile",
	});
}

export default Component;
