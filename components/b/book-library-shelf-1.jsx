import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ocxgl_ckh.css';
import '../../css/a/aw8sd1bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ocxgl_ckh"/><path class="aw8sd1bbr"/></g>`,
		"fallback": "streamline-freehand-color:book-library-shelf-1",
	});
}

export default Component;
