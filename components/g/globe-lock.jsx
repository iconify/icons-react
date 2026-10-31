import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pueof-h4b.css';
import '../../css/h/hm8hn4b1g.css';
import '../../css/g/gd18a8utg.css';
import '../../css/i/ih0g91rfv.css';
import '../../css/z/zmu5jvb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjkf7gcnT" x1="8.53" x2="14.53" y1="1.13" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="pueof-h4b wm-s"/><path fill="url(#SVGjkf7gcnT)" class="hm8hn4b1g"/><path class="gd18a8utg wm-a"/><path class="ih0g91rfv wm-s"/><path class="wm-shine zmu5jvb-s"/></g>`,
		"fallback": "withicons-utsav:globe-lock",
	});
}

export default Component;
