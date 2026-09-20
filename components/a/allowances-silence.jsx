import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lxzuo4gfs.css';
import '../../css/w/wr4n_ub_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lxzuo4gfs"/><path class="wr4n_ub_u"/></g>`,
		"fallback": "streamline-freehand-color:allowances-silence",
	});
}

export default Component;
