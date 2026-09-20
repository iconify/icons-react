import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qluwhuyur.css';
import '../../css/c/cp3-dvbfv.css';
import '../../css/i/ivfkh0bgy.css';
import '../../css/n/nzjls8dnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qluwhuyur"/><path class="cp3-dvbfv"/><path class="ivfkh0bgy"/><path class="nzjls8dnw"/></g>`,
		"fallback": "solar:clapperboard-open-bold-duotone",
	});
}

export default Component;
