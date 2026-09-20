import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i5mh1qbsc.css';
import '../../css/y/yhk6rrvjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="i5mh1qbsc"/><path class="yhk6rrvjb"/></g>`,
		"fallback": "proicons:clipboard",
	});
}

export default Component;
