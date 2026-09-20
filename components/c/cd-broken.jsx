import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx0t9iyuo.css';
import '../../css/t/tmp_81b3h.css';
import '../../css/l/lc7at9bsy.css';
import '../../css/h/hk50of6xe.css';
import '../../css/f/fpn7wmb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tx0t9iyuo"/><path class="tmp_81b3h"/><path class="lc7at9bsy"/><path class="hk50of6xe"/><path class="fpn7wmb4b"/></g>`,
		"fallback": "streamline-ultimate-color:cd-broken",
	});
}

export default Component;
