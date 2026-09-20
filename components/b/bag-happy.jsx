import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qf0v5jb1s.css';
import '../../css/q/qq0qwkbww.css';
import '../../css/n/nd3t4gqyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qf0v5jb1s"/><path class="qq0qwkbww"/><path class="nd3t4gqyr"/></g>`,
		"fallback": "reicon:bag-happy",
	});
}

export default Component;
