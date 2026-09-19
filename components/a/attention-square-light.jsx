import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pgoy4ib5g.css';
import '../../css/t/tvgcsmq7b.css';
import '../../css/y/ymlfz7e-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pgoy4ib5g"/><path class="tvgcsmq7b"/><path class="ymlfz7e-n"/></g>`,
		"fallback": "iconamoon:attention-square-light",
	});
}

export default Component;
