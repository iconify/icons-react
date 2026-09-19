import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rxd_zkzui.css';
import '../../css/v/vqbyr6ydp.css';
import '../../css/w/wh4jdubml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rxd_zkzui"/><path class="vqbyr6ydp"/><path class="wh4jdubml"/></g>`,
		"fallback": "hugeicons:euro-send",
	});
}

export default Component;
