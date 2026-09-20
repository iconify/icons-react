import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfy6f9w0h.css';
import '../../css/o/o85hb142l.css';
import '../../css/w/wu-2fgbxv.css';
import '../../css/a/aqrzy7b8m.css';
import '../../css/s/see2fgboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yfy6f9w0h"/><path class="o85hb142l"/><path class="wu-2fgbxv"/><path class="aqrzy7b8m"/><path class="see2fgboo"/></g>`,
		"fallback": "solar:electric-refueling-linear",
	});
}

export default Component;
