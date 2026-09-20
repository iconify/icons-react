import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdt261blk.css';
import '../../css/e/et-2ihb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="cdt261blk"/><rect class="et-2ihb5u"/></g>`,
		"fallback": "reicon:align-3-left-filled",
	});
}

export default Component;
