import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owtnwjtgw.css';
import '../../css/w/wmja1bbmm.css';
import '../../css/b/beswcrb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owtnwjtgw"/><path class="wmja1bbmm"/><path clip-rule="evenodd" class="beswcrb-x"/>`,
		"fallback": "solar:cup-first-bold",
	});
}

export default Component;
