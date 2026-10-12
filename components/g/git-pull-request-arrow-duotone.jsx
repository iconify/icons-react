import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-40i3b7x.css';
import '../../css/i/i4us9_bhu.css';
import '../../css/l/ldcyxoqzr.css';
import '../../css/w/wvip1acgl.css';
import '../../css/x/xh64pumvd.css';
import '../../css/f/f2pnm8bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-40i3b7x"/><path class="i4us9_bhu"/><path class="ldcyxoqzr"/><path class="wvip1acgl"/><path class="xh64pumvd"/><path class="f2pnm8bgw"/></g>`,
		"fallback": "lucide-extended:git-pull-request-arrow-duotone",
	});
}

export default Component;
