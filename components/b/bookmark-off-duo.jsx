import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a25g90ajj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yz09xbcvb.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a25g90ajj secondary"/><g class="dt0cm9dhy primary"><path class="yz09xbcvb"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:bookmark-off-duo",
	});
}

export default Component;
