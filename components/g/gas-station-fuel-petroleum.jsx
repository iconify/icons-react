import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj6sxxcbs.css';
import '../../css/a/amo0fbv9g.css';
import '../../css/x/x-e-8ab_i.css';
import '../../css/r/rpzz_3bpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj6sxxcbs"/><path class="amo0fbv9g"/><path class="x-e-8ab_i"/><path class="rpzz_3bpt"/></g>`,
		"fallback": "streamline-flex-color:gas-station-fuel-petroleum",
	});
}

export default Component;
