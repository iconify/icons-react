import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mek24e_ia.css';
import '../../css/i/i1258-uxv.css';
import '../../css/q/qwz1y-byg.css';
import '../../css/o/owtnwjtgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mek24e_ia"/><path clip-rule="evenodd" class="i1258-uxv"/><path class="qwz1y-byg"/><path class="owtnwjtgw"/>`,
		"fallback": "solar:cup-music-bold",
	});
}

export default Component;
