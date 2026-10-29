import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/to3ot3b1m.css';
import '../../css/x/xszfuzfac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="to3ot3b1m"/><path class="xszfuzfac"/></g>`,
		"fallback": "withicons:cloud-sketch",
	});
}

export default Component;
