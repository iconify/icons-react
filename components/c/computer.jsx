import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rs7bz-b_v.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/f/f3-0uhbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rs7bz-b_v"/><rect class="m6a3e3btz"/><rect class="f3-0uhbhq"/></g>`,
		"fallback": "lucide:computer",
	});
}

export default Component;
