import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-376hbau.css';
import '../../css/j/jj-2mk_jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-376hbau"/><path class="jj-2mk_jk"/></g>`,
		"fallback": "streamline-freehand-color:disability-ad",
	});
}

export default Component;
