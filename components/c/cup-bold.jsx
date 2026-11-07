import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owtnwjtgw.css';
import '../../css/w/wmja1bbmm.css';
import '../../css/k/kjksewbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owtnwjtgw"/><path class="wmja1bbmm"/><path clip-rule="evenodd" class="kjksewbck"/>`,
		"fallback": "solar:cup-bold",
	});
}

export default Component;
