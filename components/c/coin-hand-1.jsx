import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i0p67vb5m.css';
import '../../css/q/qi6l5r2qn.css';
import '../../css/e/en8mcvqby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="i0p67vb5m"/><path class="qi6l5r2qn"/><path class="en8mcvqby"/></g>`,
		"fallback": "streamline-cyber:coin-hand-1",
	});
}

export default Component;
