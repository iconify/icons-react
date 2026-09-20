import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/a/a6a2xdvpq.css';
import '../../css/r/rxh-dulfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="a6a2xdvpq"/><path class="rxh-dulfz"/></g>`,
		"fallback": "tdesign:hotspot-wave",
	});
}

export default Component;
