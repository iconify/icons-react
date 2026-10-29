import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_9g0dbfc.css';
import '../../css/z/zd1talb1t.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/f/fiogixb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f_9g0dbfc"/><path class="wm-shadow zd1talb1t"/><path class="yhtn9ti7t"/><path class="fiogixb5h"/></g>`,
		"fallback": "withicons:cake-engrave",
	});
}

export default Component;
