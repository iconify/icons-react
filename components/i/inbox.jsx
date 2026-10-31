import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sglu24bwd.css';
import '../../css/s/sjdk0abjg.css';
import '../../css/i/i6kb3pgpu.css';
import '../../css/e/ehsik7i6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEl1HxbgV" x1="9" x2="15" y1="4" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGEl1HxbgV)" class="sglu24bwd"/><path class="sjdk0abjg wm-shine"/><path class="i6kb3pgpu wm-shine"/><path class="ehsik7i6o wm-shine"/></g>`,
		"fallback": "withicons-utsav:inbox",
	});
}

export default Component;
