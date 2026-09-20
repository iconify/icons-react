import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmunasb2f.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/e4fplvyta.css';
import '../../css/m/mfcab4xzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmunasb2f"/><g class="xtpeb-edw"><path clip-rule="evenodd" class="e4fplvyta"/><path class="mfcab4xzh"/></g>`,
		"fallback": "stash:calendar-end-duotone",
	});
}

export default Component;
