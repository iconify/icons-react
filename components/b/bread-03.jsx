import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yz_qwb59l.css';
import '../../css/b/b8dvbqkre.css';
import '../../css/m/mpln52b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yz_qwb59l"/><path class="b8dvbqkre"/><path class="mpln52b5x"/></g>`,
		"fallback": "hugeicons:bread-03",
	});
}

export default Component;
