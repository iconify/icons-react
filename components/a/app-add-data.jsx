import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od8l_7bsn.css';
import '../../css/s/sck_s-bkk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="od8l_7bsn"/><path class="ouiIcon__fillSecondary sck_s-bkk"/></g>`,
		"fallback": "oui:app-add-data",
	});
}

export default Component;
