import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6muxzp-o.css';
import '../../css/c/c05mf6rvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g6muxzp-o"/><path class="c05mf6rvs"/></g>`,
		"fallback": "reicon:bolt-circle",
	});
}

export default Component;
