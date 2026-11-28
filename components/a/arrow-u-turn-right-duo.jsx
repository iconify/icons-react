import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xais63sbn.css';
import '../../css/b/bue-mrlhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xais63sbn"/><path class="bue-mrlhv"/></g>`,
		"fallback": "iconaut:arrow-u-turn-right-duo",
	});
}

export default Component;
