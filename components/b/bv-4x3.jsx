import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o83hmlbdl.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/z/zlyujhrlt.css';
import '../../css/g/gy9vsbc7g.css';
import '../../css/s/s5k3ey5bp.css';
import '../../css/s/sibrvubte.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="nv9qcacyl"><path class="zlyujhrlt"/><path class="gy9vsbc7g"/><path class="s5k3ey5bp"/><path class="sibrvubte"/></g>`,
		"fallback": "flag:bv-4x3",
	});
}

export default Component;
