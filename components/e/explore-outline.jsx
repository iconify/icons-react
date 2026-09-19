import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vy9jepc1k.css';
import '../../css/m/mwn-95zqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vy9jepc1k"/><path class="mwn-95zqz"/></g>`,
		"fallback": "basil:explore-outline",
	});
}

export default Component;
