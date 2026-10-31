import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/k7nj8lbyx.css';
import '../../css/d/dhvj6pb2b.css';
import '../../css/n/nyor14npu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHxZzFkJH" x1="9" x2="15" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHxZzFkJH)" class="k7nj8lbyx"/><path class="dhvj6pb2b wm-a"/><path class="nyor14npu wm-shine"/></g>`,
		"fallback": "withicons-utsav:burger",
	});
}

export default Component;
