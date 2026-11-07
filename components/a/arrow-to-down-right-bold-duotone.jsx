import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv08lsi2x.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f1k3q-bzm.css';
import '../../css/i/i6x-msbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iv08lsi2x"/><g class="xtpeb-edw"><path class="f1k3q-bzm"/><path class="i6x-msbst"/></g>`,
		"fallback": "solar:arrow-to-down-right-bold-duotone",
	});
}

export default Component;
