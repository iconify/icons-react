import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pmlfg_b-g.css';
import '../../css/c/c5tvmew6o.css';
import '../../css/f/f3ausszvq.css';
import '../../css/g/gh7c-9p5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="pmlfg_b-g"/><path class="c5tvmew6o wm-shine"/><path class="f3ausszvq wm-shine"/><path class="gh7c-9p5m wm-shine"/></g>`,
		"fallback": "withicons-utsav:cactus",
	});
}

export default Component;
