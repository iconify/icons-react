import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjf98zb5s.css';
import '../../css/y/yxh5m4ihj.css';
import '../../css/k/kxhhbdb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wjf98zb5s"/><path class="yxh5m4ihj"/><path class="kxhhbdb1g"/></g>`,
		"fallback": "streamline-ultimate:card-game-heart",
	});
}

export default Component;
