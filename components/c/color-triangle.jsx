import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bv2nf6r9u.css';
import '../../css/b/b-w223vgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bv2nf6r9u"/><path class="b-w223vgz"/></g>`,
		"fallback": "streamline-freehand-color:color-triangle",
	});
}

export default Component;
