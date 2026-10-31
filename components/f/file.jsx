import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjyrws3-o.css';
import '../../css/d/d7762eywc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sjyrws3-o"/><path class="d7762eywc"/></g>`,
		"fallback": "struq:file",
	});
}

export default Component;
