import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/l/ldjg42xkf.css';
import '../../css/m/mb74phb2i.css';
import '../../css/j/jokz056ng.css';
import '../../css/v/veh8-ybej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="ldjg42xkf"/><path class="mb74phb2i"/><path class="jokz056ng"/><path class="veh8-ybej"/></g>`,
		"fallback": "solar:clapperboard-open-play-line-duotone",
	});
}

export default Component;
