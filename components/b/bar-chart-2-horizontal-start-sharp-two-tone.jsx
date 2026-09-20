import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dog_d0bzi.css';
import '../../css/k/kspa2rbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dog_d0bzi"/><path class="kspa2rbdv"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start-sharp-two-tone",
	});
}

export default Component;
