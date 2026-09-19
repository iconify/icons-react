import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkpxsvb_g.css';
import '../../css/o/ot6g9xx6o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkpxsvb_g"/><path class="ot6g9xx6o"/>`,
		"fallback": "ep:chat-line-square",
	});
}

export default Component;
