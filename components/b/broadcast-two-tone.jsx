import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cvnsuabtc.css';
import '../../css/w/wdvw_nbtq.css';
import '../../css/f/f7d702b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cvnsuabtc"/><path class="wdvw_nbtq"/><path class="f7d702b9j"/></g>`,
		"fallback": "keyline-icons:broadcast-two-tone",
	});
}

export default Component;
