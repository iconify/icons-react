import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw3lpkbij.css';
import '../../css/t/tx_ah59as.css';
import '../../css/c/cs9wpoppz.css';
import '../../css/u/uv9ku2bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="tx_ah59as"/><path class="cs9wpoppz"/><path class="uv9ku2bhq"/></g>`,
		"fallback": "keyline-icons:info-two-tone",
	});
}

export default Component;
