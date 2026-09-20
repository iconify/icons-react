import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/whzrr2dys.css';
import '../../css/q/qnmv0jb6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="whzrr2dys"/><path class="qnmv0jb6u"/></g>`,
		"fallback": "streamline-plump:announcement-megaphone",
	});
}

export default Component;
