import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3e719fvy.css';
import '../../css/q/qg6_0jboy.css';
import '../../css/b/bxexw5b-v.css';
import '../../css/n/ncqff0p4t.css';
import '../../css/d/dxh8x6bps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="n3e719fvy"/><path class="qg6_0jboy"/><path class="bxexw5b-v"/><circle class="ncqff0p4t"/><circle class="dxh8x6bps"/></g>`,
		"fallback": "icon-park-solid:disk-two",
	});
}

export default Component;
