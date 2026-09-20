import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/z/zcqpw-bie.css';
import '../../css/n/nzno-7bcb.css';
import '../../css/k/koymhybkg.css';
import '../../css/v/vjcup5boc.css';
import '../../css/d/dg7lpnbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="zcqpw-bie"/><path class="nzno-7bcb"/><path class="koymhybkg"/><path class="vjcup5boc"/><path class="dg7lpnbpk"/></g>`,
		"fallback": "solar:floor-lamp-line-duotone",
	});
}

export default Component;
