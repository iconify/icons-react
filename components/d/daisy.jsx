import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/ctbspeicl.css';
import '../../css/p/p3hznqbzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ctbspeicl"/><path class="p3hznqbzm"/></g>`,
		"fallback": "doodle-icons:daisy",
	});
}

export default Component;
