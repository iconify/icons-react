import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y9bbmubfg.css';
import '../../css/m/mhi-85bhf.css';
import '../../css/r/rvti0ccgj.css';
import '../../css/e/esqay42vk.css';
import '../../css/m/mzxshtq6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y9bbmubfg"/><path class="mhi-85bhf wm-k"/><path class="rvti0ccgj wm-k"/><path class="esqay42vk wm-k"/><path class="mzxshtq6z wm-a"/></g>`,
		"fallback": "withicons:file-archive-sketch",
	});
}

export default Component;
