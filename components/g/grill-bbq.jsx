import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/amb0gmzjv.css';
import '../../css/e/erz88qkfp.css';
import '../../css/o/o6vxszbzk.css';
import '../../css/l/l04zt6bmq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="amb0gmzjv"/><path class="erz88qkfp"/><path class="o6vxszbzk"/><path class="l04zt6bmq"/></g>`,
		"fallback": "marketeq:grill-bbq",
	});
}

export default Component;
