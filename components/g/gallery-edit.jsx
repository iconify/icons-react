import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_ucti79e.css';
import '../../css/t/t1z72cbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l_ucti79e"/><path class="t1z72cbyd"/></g>`,
		"fallback": "reicon:gallery-edit",
	});
}

export default Component;
