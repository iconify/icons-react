import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vhcud1bpm.css';
import '../../css/r/r8_dbdbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vhcud1bpm"/><path class="r8_dbdbll"/></g>`,
		"fallback": "streamline-sharp:horizontal-toggle-button",
	});
}

export default Component;
