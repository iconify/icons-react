import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tpx8s4b7z.css';
import '../../css/z/zevicpjgz.css';
import '../../css/t/to5bdybou.css';
import '../../css/k/kuknt1bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tpx8s4b7z wm-deco"/><path class="wm-deco zevicpjgz"/><path class="to5bdybou"/><path class="kuknt1bgw"/></g>`,
		"fallback": "withicons:clapperboard-blueprint",
	});
}

export default Component;
