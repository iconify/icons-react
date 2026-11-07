import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ldjg42xkf.css';
import '../../css/q/qsend7bgq.css';
import '../../css/j/jxx7sm5gq.css';
import '../../css/j/j6pur8bnu.css';
import '../../css/x/x3ahtubtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ldjg42xkf"/><path class="qsend7bgq"/><path class="jxx7sm5gq"/><path class="j6pur8bnu"/><path class="x3ahtubtz"/></g>`,
		"fallback": "solar:clapperboard-open-play-broken",
	});
}

export default Component;
