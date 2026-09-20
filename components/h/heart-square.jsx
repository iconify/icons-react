import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g9wso7t1s.css';
import '../../css/i/ilpemvb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g9wso7t1s"/><path class="ilpemvb3m"/></g>`,
		"fallback": "reicon:heart-square",
	});
}

export default Component;
