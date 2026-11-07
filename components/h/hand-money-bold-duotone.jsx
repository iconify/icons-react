import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7qi5pmcg.css';
import '../../css/s/sj3u2muax.css';
import '../../css/p/ptvsaoale.css';
import '../../css/n/n0us1t6dp.css';
import '../../css/k/kd68iacai.css';
import '../../css/k/kas_9g52n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7qi5pmcg"/><path class="sj3u2muax"/><path class="ptvsaoale"/><path class="n0us1t6dp"/><path class="kd68iacai"/><path clip-rule="evenodd" class="kas_9g52n"/>`,
		"fallback": "solar:hand-money-bold-duotone",
	});
}

export default Component;
