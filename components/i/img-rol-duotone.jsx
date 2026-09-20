import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/orwat7b2y.css';
import '../../css/b/bwjsb0g5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="orwat7b2y"/><path class="bwjsb0g5p"/></g>`,
		"fallback": "lets-icons:img-rol-duotone",
	});
}

export default Component;
