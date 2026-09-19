import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orxt2w0nn.css';
import '../../css/y/ys2g1yc6p.css';
import '../../css/n/n4j_19b4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orxt2w0nn"/><path class="ys2g1yc6p"/><path class="n4j_19b4a"/>`,
		"fallback": "ion:heart-broken",
	});
}

export default Component;
