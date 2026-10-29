import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l8a49gbqf.css';
import '../../css/s/sd46-ebbq.css';
import '../../css/n/nghqmlwjd.css';
import '../../css/o/ozvja8n8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l8a49gbqf wm-k"/><path class="sd46-ebbq wm-a"/><path class="nghqmlwjd wm-k"/><path class="ozvja8n8e wm-a"/></g>`,
		"fallback": "withicons:feather-sketch",
	});
}

export default Component;
