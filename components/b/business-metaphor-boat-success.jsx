import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yggnu0s6i.css';
import '../../css/l/l1w-8dd4c.css';
import '../../css/y/yrg9z8bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yggnu0s6i"/><path class="l1w-8dd4c"/><path class="yrg9z8bbc"/></g>`,
		"fallback": "streamline-freehand:business-metaphor-boat-success",
	});
}

export default Component;
