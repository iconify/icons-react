import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wkflu6y1k.css';
import '../../css/o/oeli91cgn.css';
import '../../css/e/ev7y4dbmx.css';
import '../../css/l/lztux4j4y.css';
import '../../css/g/ghyktpbhu.css';
import '../../css/c/c91kb2byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wkflu6y1k wm-k"/><path class="oeli91cgn wm-a"/><path class="ev7y4dbmx wm-shadow"/><path class="lztux4j4y wm-k"/><path class="ghyktpbhu wm-a"/><path class="c91kb2byc wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-check-engrave",
	});
}

export default Component;
