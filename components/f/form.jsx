import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz-sb3bgx.css';
import '../../css/w/wfvu3fb-g.css';
import '../../css/y/yglfexb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yz-sb3bgx"/><rect class="wfvu3fb-g"/><rect class="yglfexb7u"/></g>`,
		"fallback": "lucide:form",
	});
}

export default Component;
