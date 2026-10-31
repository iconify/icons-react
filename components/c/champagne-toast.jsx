import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/ok4wscc4i.css';
import '../../css/y/y3sky1w9p.css';
import '../../css/s/s-v8rrbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzVxeLdEc" x1="9" x2="15" y1="1.02" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGzVxeLdEc)" class="ok4wscc4i"/><path class="wm-s y3sky1w9p"/><path class="s-v8rrbxi wm-shine"/></g>`,
		"fallback": "withicons-utsav:champagne-toast",
	});
}

export default Component;
