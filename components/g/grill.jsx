import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tpnnk8b6f.css';
import '../../css/f/fc-04mbga.css';
import '../../css/t/tqo708jot.css';
import '../../css/o/o6vxszbzk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tpnnk8b6f"/><path class="fc-04mbga"/><path class="tqo708jot"/><path class="o6vxszbzk"/></g>`,
		"fallback": "marketeq:grill",
	});
}

export default Component;
