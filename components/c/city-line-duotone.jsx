import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y6fmg0bii.css';
import '../../css/h/hf416_brp.css';
import '../../css/s/snx49vs3l.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/g/ghn47w9nx.css';
import '../../css/r/reedtrbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y6fmg0bii"/><path class="hf416_brp"/><path class="snx49vs3l"/><path class="xpzbxokqs"/><path class="ghn47w9nx"/><path class="reedtrbma"/></g>`,
		"fallback": "solar:city-line-duotone",
	});
}

export default Component;
