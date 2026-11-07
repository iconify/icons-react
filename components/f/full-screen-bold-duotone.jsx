import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s15ilickh.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/ra6fhob8w.css';
import '../../css/s/sude8ublr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s15ilickh"/><g class="xtpeb-edw"><path class="ra6fhob8w"/><path class="sude8ublr"/></g>`,
		"fallback": "solar:full-screen-bold-duotone",
	});
}

export default Component;
