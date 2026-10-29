import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvk1ilb9q.css';
import '../../css/g/gkeixvvic.css';
import '../../css/c/cpnpjfb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cvk1ilb9q wm-k"/><path class="gkeixvvic wm-k"/><path class="cpnpjfb3t wm-a"/></g>`,
		"fallback": "withicons:holly-sketch",
	});
}

export default Component;
