import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aktiaydcc.css';
import '../../css/c/c20n45bfn.css';
import '../../css/c/czv5jnbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aktiaydcc"/><path class="c20n45bfn"/><path class="czv5jnbid"/>`,
		"fallback": "selfhst:draw-io",
	});
}

export default Component;
