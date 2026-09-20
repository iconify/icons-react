import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/q/qe4w_pjer.css';
import '../../css/h/hiioskbzo.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="rmslx6b5x"/><path class="qe4w_pjer"/><path class="hiioskbzo"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cameroon",
	});
}

export default Component;
