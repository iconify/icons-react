import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/g/g_dqbgbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwibdw4bb"/><path class="g_dqbgbri"/>`,
		"fallback": "boxicons:arrow-left-stroke-circle",
	});
}

export default Component;
