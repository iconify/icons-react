import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdwq2xbwy.css';
import '../../css/g/gw8xtmbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mdwq2xbwy"/><path class="gw8xtmbth"/></g>`,
		"fallback": "tabler:brand-booking",
	});
}

export default Component;
