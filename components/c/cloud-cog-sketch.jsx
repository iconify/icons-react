import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yv00hmf2c.css';
import '../../css/y/yimpzkb5k.css';
import '../../css/u/uo7u3abxo.css';
import '../../css/p/pjuklj88t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yv00hmf2c"/><path class="wm-k yimpzkb5k"/><path class="uo7u3abxo wm-k"/><path class="pjuklj88t wm-s"/></g>`,
		"fallback": "withicons:cloud-cog-sketch",
	});
}

export default Component;
