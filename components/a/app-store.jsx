import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/h/h7jgq3b0n.css';
import '../../css/h/hat8e1vvm.css';
import '../../css/s/sokkspbhf.css';
import '../../css/n/nioxf1biv.css';
import '../../css/f/fckw5pj7s.css';
import '../../css/i/i4z2djpyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="h7jgq3b0n"/><path class="hat8e1vvm"/><path class="sokkspbhf"/><path class="nioxf1biv"/><path class="fckw5pj7s"/><path class="i4z2djpyg"/></g>`,
		"fallback": "icon-park:app-store",
	});
}

export default Component;
