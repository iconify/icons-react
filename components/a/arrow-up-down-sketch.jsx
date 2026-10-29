import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qygg6abkf.css';
import '../../css/h/h42k6-b2l.css';
import '../../css/v/vd6ip0kos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qygg6abkf wm-a"/><path class="h42k6-b2l wm-k"/><path class="vd6ip0kos wm-a"/></g>`,
		"fallback": "withicons:arrow-up-down-sketch",
	});
}

export default Component;
