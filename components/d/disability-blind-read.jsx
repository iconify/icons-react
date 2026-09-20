import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gf3wkx5ov.css';
import '../../css/p/p93hy8esn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gf3wkx5ov"/><path class="p93hy8esn"/></g>`,
		"fallback": "streamline-freehand-color:disability-blind-read",
	});
}

export default Component;
