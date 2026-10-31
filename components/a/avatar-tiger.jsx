import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/scmdyrdtu.css';
import '../../css/x/x8atf4axj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGY6YLUcnS" x1="9" x2="15" y1="5.14" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGY6YLUcnS)" class="scmdyrdtu"/><path class="wm-shine x8atf4axj"/></g>`,
		"fallback": "withicons-utsav:avatar-tiger",
	});
}

export default Component;
