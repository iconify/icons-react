import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t-b7fdbhs.css';
import '../../css/g/gz7n-81kv.css';
import '../../css/b/b3mc-lb0h.css';
import '../../css/j/jhu4z6bfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t-b7fdbhs"/><circle class="gz7n-81kv"/><path class="b3mc-lb0h"/><circle class="jhu4z6bfn"/></g>`,
		"fallback": "streamline:food-ice-cream-3-cook-frozen-cone-cream-ice-cooking-nutrition-freezer-cold-food",
	});
}

export default Component;
