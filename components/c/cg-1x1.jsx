import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_bkfkb0t.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/x/xupe-3bqn.css';
import '../../css/i/i2xiu8byt.css';
import '../../css/g/gsogmkm6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGnVGzkcSw"><path class="v_bkfkb0t"/></clipPath></defs><g clip-path="url(#SVGnVGzkcSw)" transform="translate(-119.5)scale(1.032)" class="nv9qcacyl"><path class="xupe-3bqn"/><path class="i2xiu8byt"/><path class="gsogmkm6h"/></g>`,
		"fallback": "flag:cg-1x1",
	});
}

export default Component;
