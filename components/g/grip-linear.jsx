import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ucr1abtlg.css';
import '../../css/x/xi0zi8b-f.css';
import '../../css/r/rf2iq2_-s.css';
import '../../css/b/b0x94kb-u.css';
import '../../css/w/wply1zb2x.css';
import '../../css/n/ne3znqnan.css';
import '../../css/o/ofiabdbkw.css';
import '../../css/c/c0odglb-w.css';
import '../../css/v/vy0kz1bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(90 12.016 19)" class="ucr1abtlg"/><circle transform="rotate(90 12.016 12)" class="xi0zi8b-f"/><circle transform="rotate(90 12 5)" class="rf2iq2_-s"/><circle transform="rotate(90 5.008 19)" class="b0x94kb-u"/><circle transform="rotate(90 5.008 12)" class="wply1zb2x"/><circle transform="rotate(90 4.992 5)" class="ne3znqnan"/><circle transform="rotate(90 19.008 19)" class="ofiabdbkw"/><circle transform="rotate(90 19.008 12)" class="c0odglb-w"/><circle transform="rotate(90 18.992 5)" class="vy0kz1bbg"/></g>`,
		"fallback": "solar:grip-linear",
	});
}

export default Component;
