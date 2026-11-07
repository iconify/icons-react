import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxmr-bbpl.css';
import '../../css/m/mjeg-y3pl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f09_mkvvu.css';
import '../../css/k/kv93igb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxmr-bbpl"/><path class="mjeg-y3pl"/><g class="xtpeb-edw"><path class="f09_mkvvu"/><path class="kv93igb5n"/></g>`,
		"fallback": "solar:file-stack-bold-duotone",
	});
}

export default Component;
