import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qwv8uccxb.css';
import '../../css/e/erq8epbuc.css';
import '../../css/r/rud_6rb2q.css';
import '../../css/o/o7trffbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qwv8uccxb wm-k"/><path class="erq8epbuc wm-s"/><path class="rud_6rb2q"/><path class="o7trffbyl"/></g>`,
		"fallback": "withicons-bauhaus:database-zap",
	});
}

export default Component;
