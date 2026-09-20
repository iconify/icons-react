import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-215m_gc.css';
import '../../css/c/c5jc2ztqj.css';
import '../../css/n/nzm6g-3wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-215m_gc"/><path class="c5jc2ztqj"/><path class="nzm6g-3wn"/></g>`,
		"fallback": "streamline-freehand-color:cd-rom-burn",
	});
}

export default Component;
