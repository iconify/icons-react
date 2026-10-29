import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vnmqkbckk.css';
import '../../css/w/w6ge37yyg.css';
import '../../css/s/sinl49bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vnmqkbckk"/><path class="w6ge37yyg wm-a"/><path class="sinl49bte wm-s"/></g>`,
		"fallback": "withicons:clipboard-pen-solid",
	});
}

export default Component;
