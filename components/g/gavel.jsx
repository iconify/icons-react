import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jqdg4v2wj.css';
import '../../css/v/vksynwzac.css';
import '../../css/t/taim80bxk.css';
import '../../css/s/ssrcaecle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxmiXrbOZ" x1="8.25" x2="14.25" y1="2.53" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGxmiXrbOZ)" class="jqdg4v2wj"/><path class="vksynwzac wm-a"/><path class="taim80bxk wm-s"/><path class="ssrcaecle wm-shine"/></g>`,
		"fallback": "withicons-utsav:gavel",
	});
}

export default Component;
