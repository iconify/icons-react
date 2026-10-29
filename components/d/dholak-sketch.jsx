import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/covww4msz.css';
import '../../css/z/zagf257-n.css';
import '../../css/m/mk27b2hxz.css';
import '../../css/e/eik1jzbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="covww4msz"/><path class="wm-a zagf257-n"/><path class="mk27b2hxz wm-k"/><path class="eik1jzbty wm-a"/></g>`,
		"fallback": "withicons:dholak-sketch",
	});
}

export default Component;
