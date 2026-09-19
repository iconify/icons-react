import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3p1ybc1b.css';
import '../../css/h/hbi9ybcmr.css';
import '../../css/e/efflzubsz.css';
import '../../css/m/m8e1pfb5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e3p1ybc1b"><path class="hbi9ybcmr"/><path class="efflzubsz"/><path class="m8e1pfb5x"/></g>`,
		"fallback": "icon-park:curling",
	});
}

export default Component;
