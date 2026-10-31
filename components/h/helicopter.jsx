import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wa00v5bel.css';
import '../../css/i/ig61o9f6d.css';
import '../../css/o/oav3m8b6t.css';
import '../../css/k/ktu4kabrf.css';
import '../../css/h/htk7fqoni.css';
import '../../css/c/cc72nwl5p.css';
import '../../css/e/ebj5x6b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG37UOFbhV" x1="9.01" x2="15.01" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG37UOFbhV)" class="wa00v5bel"/><path class="ig61o9f6d wm-a"/><path class="oav3m8b6t wm-shine"/><path class="ktu4kabrf wm-shine"/><path class="htk7fqoni wm-shine"/><path class="cc72nwl5p wm-shine"/><path class="ebj5x6b_g wm-shine"/></g>`,
		"fallback": "withicons-utsav:helicopter",
	});
}

export default Component;
