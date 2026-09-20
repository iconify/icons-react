import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y3-abdj5w.css';
import '../../css/f/f9u-xt92m.css';
import '../../css/b/b8o1_sb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y3-abdj5w"/><path class="f9u-xt92m"/><path class="b8o1_sb7a"/></g>`,
		"fallback": "streamline-freehand-color:bug-cloud-error",
	});
}

export default Component;
