import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vw8sbdb7f.css';
import '../../css/k/ksoov9j-m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vw8sbdb7f"/><path class="ksoov9j-m"/></g>`,
		"fallback": "streamline-color:broken-link-2-flat",
	});
}

export default Component;
