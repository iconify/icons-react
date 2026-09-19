import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u2z4-vsfh.css';
import '../../css/i/i68-anrro.css';
import '../../css/r/rot3r_bpg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="u2z4-vsfh"/><path class="i68-anrro"/><path class="rot3r_bpg"/></g>`,
		"fallback": "icon-park-outline:afferent",
	});
}

export default Component;
