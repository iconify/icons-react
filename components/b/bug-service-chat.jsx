import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f6auwhbkc.css';
import '../../css/r/rij0rtbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f6auwhbkc"/><path class="rij0rtbnb"/></g>`,
		"fallback": "streamline-freehand:bug-service-chat",
	});
}

export default Component;
