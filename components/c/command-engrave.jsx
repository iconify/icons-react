import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gycplyitt.css';
import '../../css/s/snq7lfbcd.css';
import '../../css/t/t83hz6hkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gycplyitt"/><path class="snq7lfbcd wm-shadow"/><path class="t83hz6hkm"/></g>`,
		"fallback": "withicons:command-engrave",
	});
}

export default Component;
