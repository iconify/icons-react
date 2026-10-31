import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g33ir6v6a.css';
import '../../css/s/s-sp784ag.css';
import '../../css/c/c1wmjtn4k.css';
import '../../css/v/vt2x_hp_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="g33ir6v6a"/><path class="s-sp784ag wm-shine"/><path class="c1wmjtn4k wm-shine"/><path class="vt2x_hp_b wm-shine"/></g>`,
		"fallback": "withicons-utsav:grid-2x2",
	});
}

export default Component;
