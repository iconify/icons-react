import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/h/h8ttso15c.css';
import '../../css/v/v3qt78b_j.css';
import '../../css/v/vh35ama0y.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="h8ttso15c"/><path class="v3qt78b_j"/><path class="vh35ama0y"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-liechtenstein",
	});
}

export default Component;
