import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/ze56g-mqu.css';
import '../../css/y/ywwsgjbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ze56g-mqu"/><path class="ywwsgjbnl"/></g>`,
		"fallback": "streamline-freehand:disability-sit-pregnancy",
	});
}

export default Component;
