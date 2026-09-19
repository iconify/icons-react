import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jaj-odh0b.css';
import '../../css/e/ehpx-dulg.css';
import '../../css/c/cxi2p3iuj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="jaj-odh0b"/><path class="ehpx-dulg"/><path class="cxi2p3iuj"/></g>`,
		"fallback": "icon-park-outline:gastrointestinal",
	});
}

export default Component;
