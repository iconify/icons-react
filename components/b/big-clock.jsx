import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nlmqk47ah.css';
import '../../css/o/ozbq1jbae.css';
import '../../css/n/nlsnl6dvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="nlmqk47ah"/><circle class="ozbq1jbae"/><path class="nlsnl6dvu"/></g>`,
		"fallback": "icon-park:big-clock",
	});
}

export default Component;
