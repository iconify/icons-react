import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/mpb2yyq1r.css';
import '../../css/l/lgnfgnqye.css';
import '../../css/d/d-9lbhtfc.css';
import '../../css/d/d3x7whgbq.css';
import '../../css/i/i2bqcq95j.css';
import '../../css/q/q0hmoxdeo.css';
import '../../css/a/adx0oqbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVGJiScbW" x1="9" x2="15" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVGJiScbW)" class="mpb2yyq1r"/><path class="lgnfgnqye wm-a"/><path class="d-9lbhtfc wm-shine"/><path class="d3x7whgbq wm-shine"/><path class="i2bqcq95j wm-shine"/><path class="q0hmoxdeo wm-shine"/><path class="adx0oqbec wm-shine"/></g>`,
		"fallback": "withicons-utsav:external-link",
	});
}

export default Component;
