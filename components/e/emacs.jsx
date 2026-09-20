import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/k/kgayhubgs.css';
import '../../css/i/ioxr5abkn.css';
import '../../css/u/u7kftsjlb.css';
import '../../css/n/ncm0lusxh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVG8n8eRb3d)" class="ex-9i5bwz"/><path clip-rule="evenodd" class="kgayhubgs"/><defs><linearGradient id="SVG8n8eRb3d" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="ioxr5abkn"/><stop offset=".615" class="u7kftsjlb"/><stop offset="1" class="ncm0lusxh"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:emacs",
	});
}

export default Component;
