import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zh66-hbof.css';
import '../../css/t/t69zavbbw.css';
import '../../css/v/v93r2imrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zh66-hbof"/><path class="t69zavbbw"/><path class="v93r2imrg"/></g>`,
		"fallback": "streamline-freehand-color:app-window-bookmark",
	});
}

export default Component;
