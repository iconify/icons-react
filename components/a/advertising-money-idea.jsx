import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dx4x7ibtk.css';
import '../../css/n/nqgswbb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dx4x7ibtk"/><path class="nqgswbb1j"/></g>`,
		"fallback": "streamline-freehand:advertising-money-idea",
	});
}

export default Component;
