import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jjm7c5k8n.css';
import '../../css/b/bnezscbqj.css';
import '../../css/a/aucbhcilx.css';
import '../../css/b/b-3nkx86k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLwhFxeDV" x1="9" x2="15" y1=".64" y2="22.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGLwhFxeDV)" class="jjm7c5k8n"/><path class="bnezscbqj wm-shine"/><path class="aucbhcilx wm-shine"/><path class="b-3nkx86k wm-shine"/></g>`,
		"fallback": "withicons-utsav:flower",
	});
}

export default Component;
