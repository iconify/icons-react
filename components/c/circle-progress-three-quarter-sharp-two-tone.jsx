import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jq5l_kbjy.css';
import '../../css/f/fatg9mbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jq5l_kbjy"/><path class="fatg9mbts"/></g>`,
		"fallback": "keyline-icons:circle-progress-three-quarter-sharp-two-tone",
	});
}

export default Component;
