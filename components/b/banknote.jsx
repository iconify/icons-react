import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/f/fn1xrabpt.css';
import '../../css/y/yodla97la.css';
import '../../css/k/k-foczbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sb-u7hbtr"/><circle class="fn1xrabpt"/><path class="yodla97la"/><path class="k-foczbia"/></g>`,
		"fallback": "iconaut:banknote",
	});
}

export default Component;
