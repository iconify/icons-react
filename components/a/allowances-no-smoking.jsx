import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yl6qyqbtf.css';
import '../../css/w/wcn0p-kxr.css';
import '../../css/y/ytg3nrqhy.css';
import '../../css/c/c6ortbcgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yl6qyqbtf"/><path class="wcn0p-kxr"/><path class="ytg3nrqhy"/><path class="c6ortbcgz"/></g>`,
		"fallback": "streamline-freehand-color:allowances-no-smoking",
	});
}

export default Component;
