import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ue80sdz-h.css';
import '../../css/s/sga7wtbtc.css';
import '../../css/v/v63ah-ban.css';
import '../../css/k/kaes12bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ue80sdz-h"/><path class="sga7wtbtc"/><path class="v63ah-ban"/><path class="kaes12bcm"/></g>`,
		"fallback": "withicons-bauhaus:battery-medium",
	});
}

export default Component;
