import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yzx7n0beg.css';
import '../../css/f/fsjiiebup.css';
import '../../css/k/kmrjihb3w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yzx7n0beg"/><path class="fsjiiebup"/><path class="kmrjihb3w"/></g>`,
		"fallback": "healthicons:animal-rat",
	});
}

export default Component;
